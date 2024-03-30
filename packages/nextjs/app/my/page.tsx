import Link from "next/link";
import Community from "../community/_components/community";
import { communities } from "../community/_data/communities";
import { PlusIcon } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col py-5 gap-5 px-6">
      <h1 className="font-bold text-xl">Hello, Dug!</h1>
      <span className="font-bold text-sm">In Progress</span>
      <div className="flex gap-3 shadow rounded-lg p-5">
        <div className="w-20 aspect-square bg-du-gray-200 rounded-lg" />
        <div className="flex flex-col gap-2">
          <span className="font-bold text-sm">I’ll be by your side</span>
          <span className="font-medium text-sm">Bobby</span>
          <span className="text-du-gray-400 font-bold text-sm">Go to missions</span>
        </div>
      </div>

      <Link className="flex items-center justify-between mt-10" href="/community">
        <span className="font-bold text-sm">My Communities</span>
        <PlusIcon size={24} />
      </Link>
      <div className="flex flex-wrap gap-3">
        {communities.map(community => (
          <Community key={community.label} {...community} />
        ))}
      </div>
    </main>
  );
}
