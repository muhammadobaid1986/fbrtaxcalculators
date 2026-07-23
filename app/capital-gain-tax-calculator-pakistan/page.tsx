import CapitalGainCalculator from "./CapitalGainCalculator";

export const metadata = {
  title: "Capital Gain Tax Calculator Pakistan 2026-2027 | Property CGT",
  description:
    "Calculate capital gain tax on property sale in Pakistan for 2026-2027 based on holding period and filer status.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 pt-10 pb-16 px-4 rounded-3xl">
      <CapitalGainCalculator />
    </div>
  );
}