import React from "react"
import { useContext } from "react"
import { GamersContext } from "./context/GamersContext"
import { useState } from "react"

const Navbar = () => {
  const { gamerName, setGamer, gamers } = useContext(GamersContext)

  const [name, setName] = useState()

  console.log(gamers)

  return (
    <div>
      <h1>{gamerName}</h1>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setGamer(name)}>Ingresar</button>
    </div>
  )
}

export default Navbar
