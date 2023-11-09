"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Phrase = {
  id: string;
  informalPhrase: string;
  formalPhrase: string;
};

const Page = () => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  const fetchPhrases = async () => {
    const response = await axios.get("http://localhost:4000/phrases");
    setPhrases(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPhrases();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24  bg-orange-50">
        <button className="fixed top-5 right-8 px-2 py-1 rounded hover:bg-red-500 hover:text-orange-50  text-orange-950 ">
          <Link href="/saved">Saved</Link>
        </button>
        <section className=" left-12 flex flex-col w-screen px-10">
          <h1 className="  text-2xl justify-start pb-6 ">
            How do I say this <br />
            <b className="tracking-widest">professionally</b>?
          </h1>
          {phrases.map((phrase) => {
            return (
              <button className=" inline-block" key={phrase.id}>
                {phrase.informalPhrase}
              </button>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Page;
