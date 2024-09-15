export default function AllTimeStats({ allTimeQRs, allTimeScans }) {
  return (
    <div className="stats shadow flex gap-5 justify-around mb-5 p-3 w-full bg-gradient-to-br from-indigo-300 via-purple-100 to-purple-300">
      <div className="stat text-sky-600 font-bold">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Created</div>
        <div className="stat-value text-primary">{allTimeQRs}</div>
        <div className="stat-desc"></div>
      </div>

      <div className="stat text-cyan-700 font-bold">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Scanned</div>
        <div className="stat-value text-secondary">{allTimeScans}</div>
        <div className="stat-desc"></div>
      </div>
    </div>
  );
}
