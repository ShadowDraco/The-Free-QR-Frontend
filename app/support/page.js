"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const postForm = async (formData) => {
    console.log(formData);
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_URL}/api/${formData.email}/${formData.message}`,
      {
        headers: {
          "Content-Type": "text/plain",
        },
        method: "POST",
      }
    );
    const body = await response.json();

    setError(body.error);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-indigo-500 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl font-bold">Contact Us!</h1>

            <p className="text-gray-200 font-semibold">
              Fill up the form below to send us a message.
            </p>
          </div>

          <form>
            <input
              {...register("email")}
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
            />

            <input
              {...register("subject")}
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
            />

            <textarea
              {...register("message")}
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Type your message here..."
              name="message"
              style={{ height: "121px" }}
            ></textarea>

            <div classNameName="flex justify-between">
              <input
                classNameName="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                classNameName="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
