import { Phrase } from "@/app/phrases/page";
import React, { useState } from "react";
import FormalCard from "../formal-card/FormalCard";

export default function InformalButton({
  id,
  informalPhrase,
  formalPhrase,
}: Phrase) {
  const [selectedPhrase, setSelectedPhrase] = useState<Phrase | null>(null);
  const [selected, setSelected] = useState<boolean>(false);

  const handleSelect = (phrase: Phrase) => {
    if (selectedPhrase && selectedPhrase.id === phrase.id) {
      setSelectedPhrase(null);
      setSelected(false);
      console.log("here");
    } else {
      setSelectedPhrase(phrase);
      setSelected(true);
    }
  };

  return (
    <>
      <button className=" inline-block text-left mb-2 pl-2 py-2 rounded text-indigo-950 bg-slate-200 hover:bg-pink-500 text-sm" key={id} onClick={() => {handleSelect({id,informalPhrase,formalPhrase})}}>
        {informalPhrase}
      </button>
      {selected && <FormalCard formalPhrase={formalPhrase} id={id} informalPhrase={informalPhrase} />}
    </>
  );
}
