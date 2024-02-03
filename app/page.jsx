import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-5xl">HomePage</h1>
      <Link href="/contact" className="text-xl">
        contact page
      </Link>
      <Link href="/help" className="text-xl">
        help page
      </Link>
    </div>
  );
}
