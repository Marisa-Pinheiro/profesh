"use client";

import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <main className="flex items-center h-[calc(100vh-3.5rem)] flex-col justify-between p-24 bg-indigo-950">
        <button className="fixed top-5 right-8 px-2 py-1 rounded  text-slate-200  hover:bg-pink-500 ">
          <Link href="/">Home</Link>
        </button>
        <section className="bg-indigo-950 w-80 flex  flex-col px-6 py-8 rounded">
          <h1 className=" text-slate-100 text-center mx-auto pb-3 text-lg">
            About
          </h1>
          <p className=" text-slate-100 text-justify">
            <b>ProFesh</b> is the result of salt Java Career Program Hackday.
            <br />
            <br />
            This app is intended mainly for mobile use, and aims to solve the
            problem
            <i>
              {" "}
              How can I really say what is going inside my mind professionally?{" "}
            </i>
            - I bet we have all been there...
            <br />
            <br />
            So, being heavily inspired by tiktoker{" "}
            <Link
              className=" hover:text-pink-500 underline"
              href="https://www.tiktok.com/@loewhaley"
            >
              @loewhaley
            </Link>
            , I decided to solve this problem within a few touches on your
            screen.
            <br />
            <br />
            I hope you find this helpeful!
            <br />- Marisa
          </p>
        </section>
      </main>
    </>
  );
};

export default Page;
