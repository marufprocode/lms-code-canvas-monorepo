"use client";
import MobileSidebar from "./mobile-sidebar";
import { useMediaQuery } from "usehooks-ts";
import SidebarContent from "./sidebar-content";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const smscreen = useMediaQuery("(max-width: 1024px)");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (typeof window === "undefined" || !isClient) {
    return null;
  }

  if (smscreen) {
    return <MobileSidebar />;
  }

  return (
    <aside className="fixed z-50 gap-4 bg-background p-6 shadow-lg inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-[250px]">
      <SidebarContent />
    </aside>
  );
}
