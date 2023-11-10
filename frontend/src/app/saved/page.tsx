"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Phrase } from "../phrases/page";
import { SavedCard } from "@/components/saved-card/SavedCard";
import { useRouter } from 'next/navigation'


const Page = () => {
  const [phrases, setPhrases] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const userId = localStorage.getItem("id");

  const fetchPhrases = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/users/${userId}/save`
      );
      setPhrases(response.data.flat());
      console.log("here");
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      throw new Error();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("id");
    router.push('/phrases')
  }

  useEffect(() => {
    fetchPhrases();
  },);

  if (loading) {
    return <h1 className=" text-slate-300">Loading...</h1>;
  }

  if (error) {
    return <h1 className=" text-slate-300">Oh-oh... 503 Service Unavailable</h1>;
  }

  return (
    <>
      <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24 bg-indigo-950 overflow-y-scroll">
      <button className="fixed top-5 right-6 px-2 py-1 rounded hover:text-pink-500  text-slate-300 ">
    {/*   <Link href="/" onClick={()=>handleLogout()}>Logout</Link> */}
        </button>
        <button className=" text-slate-300 hover:text-pink-500 px-2 py-1 rounded">
          <Link href="/phrases"> &#8592; Back </Link>
        </button>
        <section>
        {phrases.map((item) => (
          <SavedCard
            key={item.phrases.id}
            informalPhrase={item.phrases.informalPhrase}
            formalPhrase={item.phrases.formalPhrase}
          />
        ))}
        </section>
      </main>
    </>
  );
};

export default Page;
