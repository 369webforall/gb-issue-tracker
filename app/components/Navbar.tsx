"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/issues",
      label: "Issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b px-10 py-6 mb-6">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((issue, id) => (
          <li key={id}>
            <Link
              href={issue.href}
              className={`${
                issue.href === currentPath ? "text-zinc-800" : "text-zinc-500"
              } hover:text-zinc-900  transition-colors`}
            >
              {issue.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
