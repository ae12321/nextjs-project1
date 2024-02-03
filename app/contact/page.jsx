import Link from "next/link";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-5xl">ContactPage</h1>
      <Link href="/" className="text-xl">
        home page
      </Link>
    </div>
  );
}
