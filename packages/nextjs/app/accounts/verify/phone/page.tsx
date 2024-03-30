import Link from "next/link";
import { Button } from "~~/components/ui/button";

export default function Page() {
  return (
    <main className="flex flex-col gap-7 items-center">
      <span className="font-bold text-xl">Connect your number</span>
      <Link href="/accounts/verify/success" className="w-full">
        <Button>Next</Button>
      </Link>
    </main>
  );
}
