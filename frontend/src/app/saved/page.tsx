"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Phrase } from "../phrases/page";
import { SavedCard } from "@/components/saved-card/SavedCard";

const Page = () => {
  const [phrases, setPhrases] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const userId = localStorage.getItem("id");

  const fetchPhrases = async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/users/${userId}/save`
      );
      setPhrases(response.data);
      console.log("here");
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      throw new Error();
    }
  };

  useEffect(() => {
    fetchPhrases(userId!);
  }, [userId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Oh-oh... 503 Service Unavailable</h1>;
  }

  return (
    <>
      <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24 bg-orange-50">
        <button className=" hover:bg-red-500 hover:text-orange-50 px-2 py-1 rounded">
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
