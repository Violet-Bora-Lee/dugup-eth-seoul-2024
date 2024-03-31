import ScanTabs from "./_components/scan-tabs";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center px-6">
      <div className="mt-3 items-center justify-center p-4 text-center">
        <span className="font-bold text-xl">Scan the QR code</span>
        <br />
        <span className="font-bold text-xl">on your card</span>
      </div>
      <ScanTabs />
    </main>
  );
}
