"use client";
import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'



export default function Home() {
  const [formData, setFormData] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const router = useRouter()

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData === "" || null) {
      setError("Invalid name");
    }
    handlePost(formData);
  };

  const handlePost = async (formData: String) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/users",
        {
          userName: formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        const data = response.data;
        const newUser = data.id;
        console.log(newUser);
        setUser(newUser);
      }
    } catch (error) {
      throw new Error("Impossible to add user");
    }
  };

  useEffect(() => {
    localStorage.setItem("id", user );
  }, [user]);

  return (
    <>
      <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24 bg-indigo-950">
        <div className=" h-96 flex flex-col items-center">
          <h1 className="text-6xl font-medium pb-4 text-slate-200 mt-20">ProFesh</h1>
          <h2 className="text-xl font-light pb-6 text-slate-200">
            <i>Say it professionally.</i>
          </h2>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center"
          >
            <input
              type="text"
              className=" w-64 h-10 rounded bg-slate-300 border-2 text-slate-800/70 mb-6"
              onChange={handleUsernameChange}
              placeholder=" Username"
            ></input>
            <button 
            onClick={() => router.push('/phrases')}
            className=" px-2 py-1 rounded bg-pink-600 text-slate-200  hover:bg-pink-800 mx-8">
             START
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
