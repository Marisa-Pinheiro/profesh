"use client";

import InformalButton from "@/components/informal-button/InformalButton";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export type Phrase = {
  id: string;
  informalPhrase: string;
  formalPhrase: string;
};

const Page = () => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter()

  const fetchPhrases = async () => {
    try{
    const response = await axios.get("http://localhost:4000/phrases");
    setPhrases(response.data);
    setLoading(false);
    } catch(error){
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
  }, []);

  if (loading) {
    return <h1 className=" text-slate-300">Loading...</h1>;
  }

  if(error){
    return <h1 className=" text-slate-300">Oh-oh... 503 Service Unavailable</h1>;
  }

  return (
      <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24  bg-indigo-950 overflow-y-scroll">
        <button className="fixed top-5 right-24 px-2 py-1 rounded hover:text-pink-500  text-slate-300 ">
          <Link href="/saved">Saved</Link>
        </button>
        <button className="fixed top-5 right-6 px-2 py-1 rounded hover:text-pink-500  text-slate-300 ">
          <Link href="/" onClick={()=>handleLogout()}>Logout</Link>
        </button>
        <section className=" left-12 flex flex-col justify-start w-screen px-10">
          <h1 className="  text-2xl justify-start pb-6 text-slate-100">
            How do I say this <br />
            <b className="tracking-widest">professionally</b>?
          </h1>
          {phrases.map((phrase) =>      
              <InformalButton key={phrase.id} {...phrase} />
          )}
        </section>
      </main>
  );
};

export default Page;
