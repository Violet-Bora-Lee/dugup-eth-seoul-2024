"use client";

import Image from "next/image";
import Link from "next/link";
import Community from "./community/_components/community";
import { communities } from "./community/_data/communities";
import { PlusIcon } from "lucide-react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="sr-only">
        <Address address={connectedAddress} />
      </div>
      <main className="flex flex-col gap-7 items-center">
        <Image
          src="/home-1.png"
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-full h-auto"
          alt="Home"
        />

        <Link className="flex items-center justify-between mt-10 px-6" href="/community">
          <span className="font-bold text-sm">My Communities</span>
          <PlusIcon size={24} />
        </Link>
        <div className="flex flex-wrap gap-3 px-6">
          {communities.map(community => (
            <Community key={community.label} {...community} />
          ))}
        </div>

        <Image
          src="/home-2.png"
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-full h-auto"
          alt="Home"
        />
      </main>
    </>
  );
};

export default Home;
