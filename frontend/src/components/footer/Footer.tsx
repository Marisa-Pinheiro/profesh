import Link from "next/link";
import React from "react";


export default function Footer() {
  return (
    <footer className="h-14 bottom-0 st flex flex-col items-center bg-orange-50 text-center border-t-orange-950">
      <div className="w-full flex justify-between items-center px-8 py-4 text-center">
        <Link className=" text-orange-950  hover:text-red-500" href="/about">About</Link>
        <Link className=" text-orange-950  hover:text-red-500" href="https://github.com/Marisa-Pinheiro">GitHub</Link>
      </div>
    </footer>
  );
}
