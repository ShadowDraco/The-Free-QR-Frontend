import React from "react";

import {
  CurrencyDollarIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  EyeSlashIcon,
  XCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

export default function Features() {
  return (
    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
      <div className="mt-2 flex items-center text-md text-gray-600">
        <CurrencyDollarIcon
          aria-hidden="true"
          className="mr-1.5 h-6 w-6 flex-shrink-0 text-green-500"
        />
        Free
      </div>
      <div className="mt-2 flex items-center text-md text-gray-600">
        <CodeBracketIcon
          aria-hidden="true"
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-pink-400"
        />
        Open Source
      </div>
      <div className="mt-2 flex items-center text-md text-gray-600">
        <ShieldCheckIcon
          aria-hidden="true"
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-blue-400"
        />
        Secure
      </div>
      <div className="mt-2 flex items-center text-md text-gray-600">
        <EyeSlashIcon
          aria-hidden="true"
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-black-400"
        />
        No Cookies
      </div>
      <div className="mt-2 flex items-center text-md text-gray-600">
        <UserIcon
          aria-hidden="true"
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-purple-400"
        />
        No Signups
      </div>
      <div className="mt-2 flex items-center text-md text-gray-600">
        <XCircleIcon
          aria-hidden="true"
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-red-400"
        />
        Nothing bad
      </div>
    </div>
  );
}
