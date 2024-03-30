import Link from "next/link";
import { Button } from "~~/components/ui/button";

export default function Page() {
  return (
    <main className="flex flex-col gap-7 items-center">
      <span className="font-bold text-xl">Your account successfully created!</span>
      <Link href="/qr/scan" className="w-full">
        <Button>Scan QR code</Button>
      </Link>
    </main>
  );
}
