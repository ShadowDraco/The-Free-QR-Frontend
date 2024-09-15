import { useState } from "react";
import { useForm } from "react-hook-form";
import createRandomString from "../lib";

export default function CreateQRForm({ addNewQRData }) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [randomString, setRandomString] = useState(createRandomString(8));
  const [error, setError] = useState("");

  const validateURL = (data) => {
    return (
      data.url.indexOf("http://") === 0 || data.url.indexOf("https://") === 0
    );
  };

  const postForm = async (formData) => {
    if (validateURL(formData)) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/qr/create`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });
      const body = await response.json();

      setError(body.error);
      if (body.QR !== "") {
        addNewQRData(body);
      }
    } else {
      setError("That is an invalid URL!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setData(data);
        postForm(data);
      })}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Generate a QR
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This QR code will keep track of how many times it has been scanned.{" "}
            <strong>Nothing More</strong>! <br></br>
            You can group your QR codes with a password, and make them invisible
            to the public.
          </p>

          {/* URL Field */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                URL
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    Include https://
                  </span>
                  <input
                    {...register("url")}
                    id="url"
                    name="url"
                    type="url"
                    placeholder="https://youtube.com"
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Unique Code
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                <strong>Optionally</strong> set a grouping code for this QR{" "}
                <br></br>- all QRs with the same code are grouped together{" "}
              </p>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    Unique:
                  </span>
                  <input
                    {...register("code")}
                    id="code"
                    name="code"
                    type="text"
                    placeholder={randomString}
                    autoComplete="off"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Protected Field */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="protected"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <strong>Invisible</strong> to everyone?
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                <strong>Optionally</strong> make this QR code invisible to{" "}
                <em>those who do not have the Unique Code</em>
              </p>
              <div className="mt-2">
                <div className="flex h-6 items-center">
                  <input
                    {...register("protected")}
                    id="protected"
                    name="protected"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-500 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          What now?
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Please make sure that you do not use a password from other websites as
          your Unique Code. <br></br>
          Now take your QR code with you everywhere, track its traffic, and see
          how other&apos;s are doing!
          <br></br>
          <strong>
            There are no cookies, no trackers, no identifiers, no nothing.
          </strong>
        </p>
      </div>

      <div className="mt-6 flex items-center justify-startgap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
        <label className="text-red-500 mx-3">{error}</label>
      </div>
    </form>
  );
}
