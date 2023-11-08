import axios from "axios"
import { useState } from "react"

export default function Home() {
  const [hello, setHello] = useState<string>("")
  const fetchHello = () => {
    let data = axios.get();


  }
 
  return (
    <main>

    </main>
  )
}
