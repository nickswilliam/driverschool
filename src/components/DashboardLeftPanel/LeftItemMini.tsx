"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LeftItemTypes {
  children: React.ReactNode;
  title: string;
  href: string;
}

export const LeftItemMini = ({ children, title, href }: LeftItemTypes) => {
  const pathname = usePathname();

  return (
    <Link
      className={`w-full px-4 py-1 hover:bg-cyan-800/20 flex gap-3 items-center rounded-md  text-lg transition-colors duration-100 justify-center text-md text-cyan-900 p-2${pathname === href && 'bg-cyan-800/40'}`}
      href={href}
    >
      {/* IconSVG  */}
      {children}
      <span>{title}</span>
    </Link>
  );
};
