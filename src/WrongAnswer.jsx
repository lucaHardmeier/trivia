import React from "react"
import { useParams } from "react-router-dom"
import { GamersContext } from "./context/GamersContext"
import { useContext } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const WrongAnswer = () => {
  const { answer } = useParams()

  const { saveScore } = useContext(GamersContext)

  useEffect(() => {
    saveScore(-5)
  }, [])

  return (
    <div>
      <Link to="/">Volver</Link>
      <h1 className="wrong-answer">{answer}</h1>
    </div>
  )
}

export default WrongAnswer
