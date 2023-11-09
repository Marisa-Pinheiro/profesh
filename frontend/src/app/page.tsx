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
          name: formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(formData);
      console.log(response.status);
      if (response.status === 201) {
        const data = response.data;
        const newUser = data.username;
        setUser(newUser);
      }
    } catch (error) {
      throw new Error("Impossible to add user");
    }
  };

  useEffect(() => {
    localStorage.setItem("username", user);
  }, [user]);

  return (
    <>
      <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24 bg-orange-50">
        <div className=" h-96 flex flex-col items-center">
          <h1 className="text-6xl font-medium pb-4">ProFesh</h1>
          <h2 className="text-xl font-light pb-6">
            <i>Say it professionally.</i>
          </h2>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center"
          >
            <input
              type="text"
              className=" w-64 h-10 rounded border-orange-950 border-2 text-orange-950/70 mb-6"
              onChange={handleUsernameChange}
              placeholder=" Username"
            ></input>
            <button 
            onClick={() => router.push('/phrases')}
            className=" px-2 py-1 rounded bg-red-500 text-orange-50  hover:bg-orange-950 mx-8">
             START
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
