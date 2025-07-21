import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex space-x-6 border-b px-10 py-6 mb-6">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
