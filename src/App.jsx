import { useState } from 'react'
import './App.css'

function App() {

  const [inputSentence, setInputSentence] = useState("");  
  const [resultSentence, setResultSentence] = useState("");
  const [sentimentPrediction, setSentimentPrediction] = useState("");
  const [isEvaluated, setIsEvaluated] = useState(false);

  const handleInputChange = (event) => {
    setInputSentence(event.target.value)
  }

  const evaluate = () => {
    if (inputSentence.trim() !== "") {
      const sentiments = ["positive", "neutral", "negative"];
      setSentimentPrediction(sentiments[Math.floor(Math.random() * 3)]);
      setResultSentence(inputSentence);
      setIsEvaluated(true); 
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
      ></input>
      <button
        onClick = {evaluate}
      >
        Evaluate
      </button>
      {isEvaluated && (
        <div>
          <p>Your sentence was: 
            <span className="long-text">{resultSentence}</span>
          </p>
          <p>The sentence was evaluated as {sentimentPrediction}.</p>
        </div>
      )}
    </>
  )
}

export default App
