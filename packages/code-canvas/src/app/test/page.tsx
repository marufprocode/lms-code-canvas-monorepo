"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function TestPage() {
    const [loading, setLoading] = useState(false)
  return (
    <div className="p-10">
        <Button loading={loading} onClick={()=>setLoading(!loading)}>Test Loading button</Button>
    </div>
  )
}
