"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function Home() {
  const [hello, setHello] = useState<string>("");
  const fetchHello = async () => {
    let response = await axios.get("http://localhost:4000/hello");
    setHello(response.data);
  };
  useEffect(() => {
    fetchHello();
  }, []);

  return (
    <>
      <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24 bg-orange-50">
        <div className=" h-96 flex flex-col items-center">
          <h1 className="text-6xl font-medium pb-4">ProFesh</h1>
          <h2 className="text-xl font-light pb-6">
            <i>Say it professionally.</i>
          </h2>
          <form className=" flex flex-col justify-center">
          <input className=" w-64 h-10 rounded border-orange-950 border-2 text-orange-950/70 mb-6" placeholder=" Username"></input>
          <button className=" px-2 py-1 rounded bg-red-500 text-orange-50  hover:bg-orange-950 mx-8">
            <Link href="/phrases">START</Link>
          </button>
          </form>
        </div>
      </main>
    </>
  );
}
