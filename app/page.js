"use client";
import { useEffect, useState } from "react";

import AllTimeStats from "./components/headings/AllTimeStats";
import FormStatSpacers from "./components/misc/FormStatSpacers";
import CreateFlyoutForm from "./components/menus/CreateFlyoutForm";
import AllQRS from "./components/qrs/AllQRS";

export default function Home() {
  const [allTimeQRs, setAllTimeQRs] = useState(0);
  const [allTimeScans, setAllTimeScans] = useState(0);
  const [allQRS, setAllQRs] = useState([]);
  const [error, setError] = useState("");

  const addNewQRData = (data) => {
    setAllQRs([...allQRS, data.QR]);
    setAllTimeQRs(data.allTimeQRs);
    setAllTimeScans(data.allTimeScans);
  };

  const replaceQRData = (data) => {
    setAllQRs(data.codeQRs);
    setAllTimeQRs(data.allTimeQRs);
    setAllTimeScans(data.allTimeScans);
  };

  /* Get ALL QRS on page load */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/qr/all`, {}).then(async (res) => {
      const data = await res.json();
      setAllQRs(data.allQRS);
      setAllTimeQRs(data.allTimeQRs);
      setAllTimeScans(data.allTimeScans);
      if (data.error) {
        setError(data.error);
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-12 pt-0 bg-gray-100 bg-gradient-to-br from-indigo-200 via-purple-100 to-purple-200">
      <CreateFlyoutForm addNewQRData={addNewQRData} />
      <FormStatSpacers />
      <AllTimeStats allTimeQRs={allTimeQRs} allTimeScans={allTimeScans} />
      <AllQRS allQRS={allQRS} replaceQRData={replaceQRData} />
    </main>
  );
}
