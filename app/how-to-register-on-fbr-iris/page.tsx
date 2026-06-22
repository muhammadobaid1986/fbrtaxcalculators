export const metadata = {
  title: "How to Register on FBR Iris",
  description:
    "Learn how to register on FBR Iris and create your tax profile in Pakistan.",
};

export default function Page() {
  return (
    <div className="bg-white p-8 rounded-xl shadow mt-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        How to Register on FBR Iris
      </h1>

      <p className="mb-4">
        FBR Iris is the official tax portal used by taxpayers in Pakistan.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step 1: Visit FBR Iris
      </h2>

      <p className="mb-4">
        Open the official FBR Iris portal and start registration.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step 2: Enter CNIC Details
      </h2>

      <p className="mb-4">
        Provide your CNIC number and personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step 3: Verify Contact Information
      </h2>

      <p className="mb-4">
        Verify your mobile number and email address.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step 4: Complete Registration
      </h2>

      <p className="mb-4">
        After verification, your FBR Iris account will be activated.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Related Guides
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/how-to-become-a-filer" className="text-green-600">
              How to Become a Filer
            </a>
          </li>

          <li>
            <a href="/atl-status-check-pakistan" className="text-green-600">
              ATL Status Check
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}