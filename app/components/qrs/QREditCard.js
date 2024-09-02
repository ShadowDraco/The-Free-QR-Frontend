import React from "react";

import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

export default function QRCard({ qr, index, selectQRCode }) {
  return (
    <li
      className="flex flex-wrap items-center justify-center w-full"
      key={`${qr.url}/${qr.code}/${index}`}
    >
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-60 shadow-lg">
        <div className="flex justify-center my-1">
          <button
            onClick={selectQRCode}
            href="#_"
            class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
          >
            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white">Edit</span>
          </button>
        </div>

        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="pt-10 px-10 flex items-center justify-center">
          <Image
            className=" w-40"
            src={qr.qr}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="text-white p-4 w-full">
          <span className="opacity-75 break-words line-clamp-3 max-w-fit overflow-ellipsis">
            {qr.url}
          </span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">
              {qr.protected ? (
                <EyeSlashIcon
                  aria-hidden="true"
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-black-400"
                />
              ) : (
                <EyeIcon
                  aria-hidden="true"
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-black-400"
                />
              )}
            </span>
            <span>{qr.count}</span>
            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              {qr.code}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
