import { Phrase } from '@/app/phrases/page';
import axios from 'axios';
import React, { FormEvent } from 'react'


export default function FormalCard({formalPhrase,id,informalPhrase}:Phrase) {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePost(formalPhrase);
  };

  const userId = localStorage.getItem("id")

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
        console.log(response.data)
      }
    } catch (error) {
      throw new Error("Impossible to add phrase.");
    }
  };

  return (
    <article className='px-6 w-80 bg-red-500 text-orange-50 py-3 rounded mt-3 mb-3 text-justify'>
        <p>Dear X,
          <br/>
        <b><i><q>{formalPhrase}</q></i></b>
          <br/>
        Sincerely,</p>
        <form onSubmit={handleSubmit}>
          <button onClick={()=> handlePost(id)}>Save</button>
        </form>

    </article>
  )
}
