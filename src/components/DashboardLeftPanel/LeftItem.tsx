"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LeftItemTypes {
  children: React.ReactNode;
  title: string;
  href: string;
  tailwind?: string;
}

export const LeftItem = ({ children, title, href, tailwind }: LeftItemTypes) => {
  const pathname = usePathname();

  return (
    <Link
      className={`w-full px-4 py-4 hover:bg-cyan-800/40 flex gap-3 items-center rounded-md text-cyan-950 text-lg transition-colors duration-100 ${tailwind} ${pathname === href && 'bg-cyan-800/40'}`}
      href={href}
    >
      {/* IconSVG  */}
      {children}
      <span>{title}</span>
    </Link>
  );
};
