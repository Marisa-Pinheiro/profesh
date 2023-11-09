import { Phrase } from '@/app/phrases/page'
import React from 'react'

export const SavedCard = ({id,informalPhrase,formalPhrase}:Phrase) => {
  return (
    <article>
        <h4>{informalPhrase}</h4>
        <p>{formalPhrase}</p>
    </article>
  )
}
