import Link from "next/link";
import React from "react";

const links = [
  { href: "/server", label: "server" },
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/query", label: "query" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-5xl mx-auto ">
        <h1>
          <Link href="/">Top</Link>
        </h1>
        <ul className="menu menu-horizontal">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="capitalize">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
