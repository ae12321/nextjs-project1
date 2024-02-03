import Link from "next/link";
import React from "react";

export default function HelpPage() {
  return (
    <div>
      <h1 className="text-5xl">HelpPage</h1>
      <Link href="/" className="text-xl">
        home page
      </Link>
    </div>
  );
}
