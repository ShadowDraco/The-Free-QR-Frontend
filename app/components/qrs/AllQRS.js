import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import QRCard from "./QRCard";

export default function AllQRS({ allQRS, replaceQRData }) {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const postSearch = async (formData) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/qr/code`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });

    const body = await response.json();

    setError(body.error);

    if (body.codeQRs) {
      replaceQRData(body);
    }
  };

  return (
    <div className="my-10 w-full">
      <div className="py-6 flex flex-col justify-center w-full sm:py-12">
        <div className="relative py-3 sm:max-w-2xl sm:mx-auto w-full">
          <div className="absolute inset-0 w-full bg-gradient-to-r from-indigo-900 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-1 sm:-rotate-6 rounded-3xl"></div>
          <div className="text-white relative px-2 py-10 bg-indigo-500 shadow-lg rounded-3xl sm:p-10 max-w-3xl">
            <form
              className="w-full mb-5"
              onSubmit={handleSubmit((data) => {
                postSearch(data);
              })}
            >
              <label
                htmlFor="code"
                className="block text-lg font-medium leading-6 text-white"
              >
                Search by Group Code:
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">#</span>
                </div>
                <input
                  {...register("code")}
                  type="text"
                  name="code"
                  id="code"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="something fancy!"
                />

                <div className="absolute inset-y-0 right-0 flex items-center p4-3 text-gray-600">
                  <button type="submit">
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    />
                  </button>
                </div>
              </div>
            </form>

            <ul
              role="list"
              className="divide-y divide-gray-100 scrollbar w-full overflow-x-hidden"
              style={{ maxHeight: "63em", overflowY: "scroll" }}
            >
              {allQRS?.length > 0 ? (
                allQRS.map((qr, index) => (
                  <QRCard key={`${qr.code}-${index}`} qr={qr} index={index} />
                ))
              ) : (
                <div className="my-10">
                  <p className="">There are no QRs here. Be the FIRST!</p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
