export default function Page() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Pakistan Tax Resource Center
      </h1>

      <ul className="list-disc pl-6 space-y-3 text-green-600">
        <li><a href="/blog/pakistan-income-tax-guide">Complete Income Tax Guide</a></li>
        <li><a href="/tax-slab-comparison-pakistan">Tax Slab Comparison</a></li>
        <li><a href="/salary/180000">Salary Tax Example</a></li>
        <li><a href="/blog/income-tax-slabs-2026-27-pakistan">Income Tax Slabs 2026-27</a></li>
      </ul>
    </div>
  );
}
