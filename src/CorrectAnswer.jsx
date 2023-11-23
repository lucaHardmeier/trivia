import React from "react"
import { useParams } from "react-router-dom"

const CorrectAnswer = () => {
  const { answer } = useParams()

  return <h1 className="correct-answer">{answer}</h1>
}

export default CorrectAnswer
