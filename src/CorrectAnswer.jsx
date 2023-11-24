import React from "react"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { GamersContext } from "./context/GamersContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const CorrectAnswer = () => {
  const { answer } = useParams()

  const { saveScore } = useContext(GamersContext)

  useEffect(() => {
    saveScore(10)
  }, [])

  return (
    <div>
      <Link to="/">Volver</Link>
      <h1 className="correct-answer">{answer}</h1>
    </div>
  )
}

export default CorrectAnswer
