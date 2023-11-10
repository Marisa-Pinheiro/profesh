import { Phrase } from '@/app/phrases/page'
import React from 'react'

export const SavedCard = ({informalPhrase,formalPhrase}:Phrase) => {
  return (
    <article className='inline-block text-left w-80 my-3 p-3 rounded text-indigo-950 bg-slate-100 text-sm'>
        <h4 className='text-pink-700 my-3'><b>{informalPhrase}</b></h4>
        <br/>
        <q><i>{formalPhrase}</i></q>
    </article>
  )
}
