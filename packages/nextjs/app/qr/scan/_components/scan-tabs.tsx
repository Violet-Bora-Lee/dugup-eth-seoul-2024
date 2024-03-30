"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~~/components/ui/tabs";

export default function ScanTabs() {
  const [code, setCode] = useState("");

  return (
    <Tabs defaultValue="code" className="w-full">
      <TabsContent value="upload">
        <Link href={"/moments/VLUP-GREB-RAW9/add"}>
          <div className="w-full aspect-video bg-black rounded-lg" />
        </Link>
      </TabsContent>
      <TabsContent value="scan">
        <div className="w-full aspect-video bg-du-gray-200 rounded-lg" />
      </TabsContent>
      <TabsContent value="code">
        <div className="w-full aspect-video flex flex-col gap-4">
          <Label htmlFor="code">Code</Label>
          <Input id="code" placeholder="xxxx-xxxx-xxxx" value={code} onChange={e => setCode(e.target.value)} />
          <Link href={`/moments/${code}/add`}>
            <Button>Enter Code</Button>
          </Link>
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
