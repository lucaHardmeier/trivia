import React from "react"
import { useParams } from "react-router-dom"

const WrongAnswer = () => {
  const { answer } = useParams()

  return <h1 className="wrong-answer">{answer}</h1>
}

export default WrongAnswer
