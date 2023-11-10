import { Phrase } from "@/app/phrases/page";
import axios from "axios";
import React, { FormEvent } from "react";

export default function FormalCard({
  formalPhrase,
  id,
  informalPhrase,
}: Phrase) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePost(formalPhrase);
  };

  const userId = localStorage.getItem("id");

  const handlePost = async (formData: typeof id) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/users/${userId}/save`,
        {
          phraseId: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        console.log(response.data);
      }
    } catch (error) {
      throw new Error("Impossible to add phrase.");
    }
  };

  return (
    <article className="px-6 w-86 bg-pink-700 text-sm text-slate-100 py-3 rounded mt-3 mb-3 text-justify">
      <div>
        <p>
          Dear X,
          <br />
          <q>
            <i>{formalPhrase}</i>
          </q>
          <br />
          Sincerely, 
        </p>
        <form onSubmit={handleSubmit}>
          <button className="border-2 border-slate-100 rounded px-1 mt-1 hover:text-indigo-950 hover:border-indigo-950" onClick={() => handlePost(id)}>
            Save
          </button>
        </form>
      </div>
    </article>
  );
}
