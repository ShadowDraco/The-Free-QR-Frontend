import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-400 to-purple-200 p-4">
      <p className="text-center font-xl">
        Web Services by{" "}
        <a
          target="_blank"
          href="https://github.com/shadowdraco"
          className="text-indigo-700 font-bold underline underline-offset-2"
        >
          Ethan Storm
        </a>
      </p>
    </div>
  );
}
