import React from "react";
import Image from "next/image";
export default function AllQRS({ allQRS }) {
  return (
    <div className="my-5">
      <ul role="list" className="divide-y divide-gray-100">
        {allQRS.map((qr, index) => (
          <li
            key={`${qr.url}/${qr.code}/${index}`}
            className="flex justify-between gap-x-6 py-5"
          >
            <div className="flex min-w-0 gap-x-4">
              <Image
                alt=""
                src={qr.qr}
                width={200}
                height={200}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {qr.url}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {qr.code}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
