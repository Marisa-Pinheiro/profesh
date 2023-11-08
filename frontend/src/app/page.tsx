"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Footer from "@/components/footer/Footer";

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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{hello}</h1>
      </main>
      <Footer />
    </>
  );
}
