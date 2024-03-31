"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Contract, providers } from "ethers";
import Web3Modal from "web3modal";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~~/components/ui/tabs";
import { CodeToNFTContractAddress, abi } from "~~/constants/";

export default function ScanTabs() {
  const [code, setCode] = useState("");
  const web3ModalRef = useRef<any>();

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Rinkeby network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 11155111) {
      // Sepolia
      window.alert("Change the network to Sepolia");
      throw new Error("Change network to Sepolia");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const mintCodeToNftNft = async (code: string) => {
    try {
      const signer = await getProviderOrSigner(true);
      const contract = new Contract(CodeToNFTContractAddress, abi, signer);

      const tx = await contract.redeemCodeAndMintNFT(code);
      await tx.wait();
      console.log("Minted code to NFT");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "sepolia",
      providerOptions: {},
      disableInjectedProvider: false,
    });
  }, []);

  return (
    <Tabs defaultValue="code" className="w-full">
      <TabsContent value="upload">
        <Link href={"/moments/VLUP-GREB-RAW9/add"}>
          <div className="w-full aspect-video bg-black rounded-lg" />
        </Link>
      </TabsContent>
      <TabsContent value="scan">
        <div className="w-full aspect-video bg-du-gray-200 rounded-lg">
          <Image
            src="/scan-demo.png"
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full h-auto"
            alt="Project Mission"
          />
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div className="w-full aspect-video flex flex-col gap-4">
          <Label htmlFor="code">Code</Label>
          <Input
            id="code"
            placeholder="xxxx-xxxx-xxxx"
            value={code}
            onChange={(e) => {
              const formattedCode = e.target.value
                .replace(/-/g, "")
                .match(/.{1,4}/g)
                ?.join("-");
              setCode(formattedCode || "");
            }}
          />
          <Button
            onClick={() => {
              mintCodeToNftNft(code);
              console.log("Code entered:", code);
            }}
          >
            Enter Code
          </Button>
        </div>
      </TabsContent>

      <TabsList className="grid w-full grid-cols-3 mt-5">
        <TabsTrigger value="upload">Upload</TabsTrigger>
        <TabsTrigger value="scan">Scan</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

// mintCodeToNftNft
