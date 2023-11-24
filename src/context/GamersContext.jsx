import { createContext, useState } from "react"

export const GamersContext = createContext({})

export const GamersProvider = ({ children }) => {
  const [gamers, setGamers] = useState([])
  const [gamerName, setGamer] = useState("")

  const saveScore = (score) => {
    let updateGamer = gamers.find((gamer) => gamer.name === gamerName)
    const newGamers = gamers.filter((newGamer) => newGamer.name !== gamerName)

    if (updateGamer) {
      updateGamer.score += score
    } else {
      updateGamer = { name: gamerName, score }
    }
    console.log("update gamer", updateGamer)
    setGamers([...newGamers, updateGamer])
  }

  return (
    <GamersContext.Provider value={{ saveScore, gamerName, setGamer, gamers }}>
      {children}
    </GamersContext.Provider>
  )
}
