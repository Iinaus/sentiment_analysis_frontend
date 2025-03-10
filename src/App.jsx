import { useState } from 'react'
import './App.css'

function App() {

  const [inputSentence, setInputSentence] = useState("")
  const [resultSentence, setResultSentence] = useState("")
  const [sentimentPrediction, setSentimentPrediction] = useState("")
  const [isEvaluated, setIsEvaluated] = useState(false)

  const handleInputChange = (event) => {
    setInputSentence(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      evaluate()
    }
  }

  // Modify this function to fetch evaluation from backend in the future
  const fetchEvaluation = (resultSentence) => {
    const sentiments = ["positive", "neutral", "negative"]
    setSentimentPrediction(sentiments[Math.floor(Math.random() * 3)]);
  }

  const evaluate = () => {
    if (inputSentence.trim() !== "") {   
      setResultSentence(inputSentence)
      fetchEvaluation(resultSentence)
      setIsEvaluated(true)
      setInputSentence("")
    }
  }

  return (
    <>
      <h1>Sentiment Analysis</h1>
      <p>This is a dummy frontend for upcoming sentiment analysis backend.</p>
      <p>Write a sentance to evaluate.</p>
      <input
        value = {inputSentence}
        onChange = {handleInputChange}
        onKeyDown= {handleKeyDown}
      ></input>
      <button
        onClick = {evaluate}
      >
        Evaluate
      </button>
      {isEvaluated && (
        <div>
          <p>Your sentence was:
            <span className = "long-text"> {resultSentence}</span>
          </p>
          <p className = {sentimentPrediction}>
            The sentence was evaluated as {sentimentPrediction}.
          </p>
        </div>
      )}
    </>
  )
}

export default App
