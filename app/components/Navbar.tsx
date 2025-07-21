"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";

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
        {links.map((link, id) => (
          <li key={id}>
            <Link
              href={link.href}
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
