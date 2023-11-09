"use client";

import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24  bg-orange-50">
      <button className="fixed top-5 right-8 px-2 py-1 rounded bg-red-500 text-orange-50  hover:bg-orange-950 ">
          <Link href="/saved">Saved</Link>
        </button>
        <section>
        <h1>How do I say this <br/><b>professionally</b>?</h1>
        </section>     
      </main>
    </>
  );
};

export default Page;
