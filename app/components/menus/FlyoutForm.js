import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import CloseButton from "./CloseButton";
import CreateQRForm from "../forms/CreateQRForm";

export default function FlyoutForm({ addNewQRData }) {
  return (
    <Popover className="relative gap-5 justify-around mt-5 p-3 w-full bg-gradient-to-br from-indigo-300 to-purple-100">
      <PopoverButton className=" mt-10 w-full text-center inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900">
        <span className="text-3xl text-center w-full">
          <em>Create Your FREE QR</em>
        </span>
        <ChevronDownIcon aria-hidden="true" className="h-10 w-10" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="relative left-1/2 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-xl flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            <CreateQRForm addNewQRData={addNewQRData} />
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
