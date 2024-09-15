"use client";
import { useEffect, useState } from "react";

import MainBanner from "./components/headings/MainBanner";
import CreateQRForm from "./components/forms/CreateQRForm";
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

  /* Get ALL QRS on page load */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/qr/all`, {}).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setAllQRs(data.allQRS);
      setAllTimeQRs(data.allTimeQRs);
      setAllTimeScans(data.allTimeScans);
      if (data.error) {
        setError(data.error);
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainBanner allTimeQRs={allTimeQRs} allTimeScans={allTimeScans} />
      <br></br>
      <CreateQRForm addNewQRData={addNewQRData} />
      <AllQRS allQRS={allQRS} />
    </main>
  );
}
