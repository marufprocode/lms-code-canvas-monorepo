"use client";
import Link from "next/link";
import { sidebarNavItems } from "../_constants/sidenav-items";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { Dot } from "lucide-react";

export default function SidebarContent() {
  const path = usePathname();

  const defaultNav = sidebarNavItems.reduce((acc, curr) => {
    const foundChild = curr.children?.find((itm) => itm.href === path);
    return foundChild ? curr.name : acc;
  }, "");

  return (
    <div>
      <Accordion type="single" collapsible defaultValue={defaultNav}>
        {sidebarNavItems.map((item) => {
          const NavLink = item?.href ? Link : "div";
          const isActive = item?.children
            ? item?.children?.some((link) => link.href === path)
            : path === item?.href;
          return (
            <div key={item.name} className="flex flex-col mt-2">
              <AccordionItem value={item.name} className="border-b-0">
                <AccordionTrigger
                  hasEndIcon={!!item.children}
                  className={cn("hover:no-underline py-2 px-3 rounded-md m-0", {
                    "bg-gray-100 text-primary": isActive,
                  })}
                >
                  <NavLink
                    className="w-full flex gap-2 items-center text-start"
                    href={item?.href as string}
                  >
                    <span>{item?.icon}</span><span>{item.name}</span>
                  </NavLink>
                </AccordionTrigger>
                {item?.children && (
                  <AccordionContent>
                    {item.children?.length > 0 &&
                      item.children?.map((itm) => {
                        const NavLink = itm?.href ? Link : "div";
                        const isActive = itm?.href === path;
                        return (
                          <AccordionItem
                            value={itm.name}
                            key={itm.name}
                            className="border-b-0 py-2 px-3 w-full"
                          >
                              <AccordionTrigger hasEndIcon={false} className="p-0 m-0 hover:no-underline">
                              <Link
                                className={cn("ml-2 w-full flex items-center gap-2 text-start", {
                                  "text-primary": isActive,
                                })}
                                href={itm?.href as string}
                              >
                               <Dot/> <span>{itm.name}</span>
                              </Link>
                              </AccordionTrigger>
                          </AccordionItem>
                        );
                      })}
                  </AccordionContent>
                )}
              </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
}
