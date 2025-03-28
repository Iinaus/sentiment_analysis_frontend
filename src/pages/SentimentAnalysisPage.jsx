import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SentimentAnalysisPage = () => {

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

  const localUrl = "http://127.0.0.1:8080/evaluate";
  const URL = 'https://sentiment-analysis-backend-cloud-computing-backend.2.rahtiapp.fi/evaluate';

  const fetchEvaluation = async (sentence) => {
    try {
      const response = await fetch(localUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence: sentence }),
      })
  
      const data = await response.json()
      return data
          
    } catch (error) {
      console.error('Error', error)
      return null
    }
  }

  const evaluate = async () => {
    const trimmedInput = userInput.trim()

    if (trimmedInput !== "") {  

      const data = await fetchEvaluation(trimmedInput)

      if (data) {
        setSentence(data.sentence)
        setSentimentPrediction(data.sentiment)
        setIsEvaluated(true)
        setUserInput("")
      } else {
        console.error("Evaluation failed.")
        toast.error("Evaluation failed, try again later", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
        })
      }  

    } else {
      console.log("Input is empty.")
      toast.warn("Please enter text to be evaluated", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
      })
    }
  }

  return (
    <>
      <h1>Sentiment Analysis</h1>
      <p>Welcome to the Sentiment Analysis Tool! Here, you can quickly analyze the sentiment of any text you input.</p>
      <p>Simply type a sentence in english below, and we'll evaluate whether it's positive, negative, or neutral.</p>
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
      <ToastContainer />
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

export default SentimentAnalysisPage