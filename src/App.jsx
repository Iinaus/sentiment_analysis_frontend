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

  const fetchEvaluation = async (resultSentence) => {
    try {
      const response = await fetch('https://sentiment-analysis-backend-cloud-computing-backend.2.rahtiapp.fi/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence: resultSentence }),
      });
  
      const data = await response.json()
      console.log('Vastaus palvelimelta:', data)
      setSentimentPrediction(data.sentiment)
    } catch (error) {
      console.error('Error', error)
    }
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
      <p>This is a dummy frontend for upcoming sentiment analysis backend...</p>
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
