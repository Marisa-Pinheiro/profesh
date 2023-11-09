"use client";

import Link from "next/link";
import React from "react";

const Page = () => {
    return (
      <>
  <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24 bg-orange-50">
      <button className=" hover:bg-red-500 hover:text-orange-50 px-2 py-1 rounded"><Link href="/phrases"> &#8592; Back </Link></button>
        <section>

        </section>
  </main>
  </>
    );
  };
  
  export default Page;