import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed flex top-0  w-full flex-wrap items-center justify-between bg-orange-50 text-center py-2 text-orange-950 hover:text-red-500  border-b-orange-950 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <Link
            className="mx-2 my-1 flex items-center text-3xl lg:mb-0 lg:mt-0"
            href="/"
          >
            ProFresh
          </Link>
        </div>
      </div>
    </nav>
  );
}
