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
      <button className=" inline-block" key={id} onClick={() => {handleSelect({id,informalPhrase,formalPhrase})}}>
        {informalPhrase}
      </button>
      {selected && <FormalCard formalPhrase={formalPhrase} />}
    </>
  );
}
