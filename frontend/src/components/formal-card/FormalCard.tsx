import React from 'react'

type FormalCarProps = {
    formalPhrase:String
}
export default function FormalCard({formalPhrase}:FormalCarProps) {
  return (
    <article>
        <p>Dear X,</p>
        <p>{formalPhrase}</p>
        <p>Sincerely,</p>
    </article>
  )
}
