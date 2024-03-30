import Link from "next/link";
import { Button } from "~~/components/ui/button";

interface Props {
  params: {
    code: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <main className="flex flex-col gap-7 items-center px-6">
      <span className="font-bold text-xl">I’ll be by your side</span>
      <span className="font-medium text-sm">BOBBY</span>
      <Button variant={"secondary"} disabled>
        {params.code}
      </Button>
      <Link href={`/moments/${params.code}/add/success`} className="w-full">
        <Button>Add to my moments</Button>
      </Link>
    </main>
  );
}
