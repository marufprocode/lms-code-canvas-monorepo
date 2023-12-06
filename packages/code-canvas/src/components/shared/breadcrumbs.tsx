"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface breadcrumbsProps {
  crumb?: string;
}

export default function Breadcrumbs({ crumb }: breadcrumbsProps) {
  const pathName = usePathname();
  const navigation = (index: number) => {
    const url = pathName
      .split("/")
      .slice(0, index)
      .filter((crumb) => crumb !== "")
      .join("/");
    return `/${url}`;
  };
  const crumbs = pathName
    .split("/")
    .filter((crumb, index) => crumb !== "dashboard" && index !== 2)
    .map((path, index, arr) => {
      return {
        title:
          index === 0 ? (
            <Link href="/dashboard" >
              <Home size={14} className="hover:bg-gray-100 hover:text-primary rounded-sm" />
            </Link>
          ) : index === arr.length - 1 ? (
            crumb ? (
              crumb
            ) : (
              path
            )
          ) : (
            <Link
              href={navigation(index + 3)}
              className="px-1 hover:bg-gray-100 hover:text-primary rounded-sm transition-all"
            >
              {path}
            </Link>
          ),
      };
    });
  return (
    <div className="flex items-center">
      {crumbs?.length > 0 &&
        crumbs?.map((crumb, index, arr) => {
          return (
            <div key={index} className="capitalize flex items-center">
              <span>{crumb.title}</span>
              {index !== arr.length - 1 && <span className="mx-1">/</span>}
            </div>
          );
        })}
    </div>
  );
}
