import { useState } from 'react'
import './App.css'

function App() {

  const [userInput, setUserInput] = useState("")
  const [sentence, setSentence] = useState("")
  const [sentimentPrediction, setSentimentPrediction] = useState("")
  const [isEvaluated, setIsEvaluated] = useState(false)

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      evaluate()
    }
  }

  const fetchEvaluation = async (sentence) => {
    try {
      const response = await fetch('https://sentiment-analysis-backend-cloud-computing-backend.2.rahtiapp.fi/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence: sentence }),
      })
  
      const data = await response.json()
      console.log('Vastaus palvelimelta:', data)

      setSentence(sentence)
      setSentimentPrediction(data.sentiment)
      setIsEvaluated(true)
      setUserInput("")      
    } catch (error) {
      console.error('Error', error)
      setIsEvaluated(false)
    }
  }

  const evaluate = () => {
    const trimmedInput = userInput.trim()

    if (trimmedInput !== "") {  
      fetchEvaluation(trimmedInput)
    }
  }

  return (
    <>
      <h1>Sentiment Analysis</h1>
      <p>This is a dummy frontend for upcoming sentiment analysis backend.</p>
      <p>Write a sentence to evaluate.</p>
      <input
        value = {userInput}
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
            <span className = "long-text"> {sentence}</span>
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
