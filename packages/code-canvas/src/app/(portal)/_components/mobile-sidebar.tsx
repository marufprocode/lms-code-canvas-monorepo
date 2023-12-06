"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import SidebarContent from "./sidebar-content";

export default function MobileSidebar() {

  return (
    <Sheet >
        <SheetContent side="left" className="!w-[320px] sm:w-[540px]">
          <SidebarContent/>
        </SheetContent>
    </Sheet>
  )
}
