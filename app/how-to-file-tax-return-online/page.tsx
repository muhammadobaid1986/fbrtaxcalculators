"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.replace("/how-to-file-tax-return-online-pakistan");
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <p>Redirecting…</p>
    </div>
  );
}