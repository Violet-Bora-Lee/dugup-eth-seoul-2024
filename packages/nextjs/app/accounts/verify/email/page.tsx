import Link from "next/link";
import { Button } from "~~/components/ui/button";

export default function Page() {
  return (
    <main className="flex flex-col gap-7 items-center">
      <span className="font-bold text-xl">Check your inbox</span>
      <Link href={"/accounts/verify/phone"} className="w-full">
        <Button>Verify code</Button>
      </Link>
    </main>
  );
}
