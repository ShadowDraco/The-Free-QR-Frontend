import { XMarkIcon } from "@heroicons/react/20/solid";

export default function AllTimeStats({ allTimeQRs, allTimeScans }) {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden mb-24 bg-yellow-100 w-full px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900 flex-1">
          <strong className="font-semibold">August 2024-Present</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          {allTimeQRs} Generated<br></br>
          {allTimeScans} Scans
        </p>
      </div>
    </div>
  );
}
