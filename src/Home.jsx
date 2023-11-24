import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [question, setQuestion] = useState()

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const res = await fetch(
          "https://the-trivia-api.com/v2/questions?region=AR&limit=1"
        )
        const data = await res.json()
        setQuestion(data[0])
      } catch (error) {
        console.log(error)
      }
    }
    getQuestion()
  }, [])

  console.log(question)

  return (
    <div className="answers-container">
      <h1>Which band includes 'Anni-Frid Lyngstad'?</h1>
      <Link to={"/correct/ABBA"}>1. ABBA</Link>
      <Link to={"/wrong/Led Zeppelin"}>2. Led Zeppelin</Link>
    </div>
  )
}

export default Home
