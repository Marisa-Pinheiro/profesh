import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="h-15 bottom-0 st flex flex-col items-center bg-orange-50 text-center text-orange-950  hover:text-red-500 border-t-orange-950">
      <div className="w-full flex justify-between items-center px-8 py-4 text-center">
        <Link href="/about">About</Link>
        <a href="https://github.com/Marisa-Pinheiro">GitHub</a>
      </div>
    </footer>
  );
}
