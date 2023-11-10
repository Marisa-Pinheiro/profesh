import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="bg-indigo-950 fixed flex top-0 h-20 w-full flex-wrap items-center justify-between text-center py-2 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <Link
              className="mx-2 my-1  text-slate-300 hover:text-pink-600 flex items-center text-3xl lg:mb-0 lg:mt-0"
              href="/"
            >
              ProFesh
            </Link>
          </div>
        </div>
      </nav>
      <hr className="divide-orange-950 w-full h-1" />
    </>
  );
}
