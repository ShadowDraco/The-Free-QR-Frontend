import React from "react";
import Features from "./Features";
import SupportButton from "./SupportButton";
import AllTimeStats from "./AllTimeStats";
import { KofiButton } from "react-kofi-button";

export default function MainBanner() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between w-full bg-gray-200 p-5 bg-gradient-to-br from-purple-100 via-indigo-200 to-indigo-200">
      <div className="min-w-0 flex-1">
        <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl p-6">
          <span className="block">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-400 from-blue-700">
              FREE QR
            </span>
          </span>
        </h3>
        <Features />
      </div>
      <div className="mt-3 flex flex-col gap-3 flex-wrap text-sm text-gray-600">
        <KofiButton
          username="stormyfrolic"
          label="Support Us"
          preset=""
          backgroundColor="kofiRed"
        />
        <SupportButton />
      </div>
    </div>
  );
}
