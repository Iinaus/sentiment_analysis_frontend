import './App.css'
import React from 'react'
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SentimentAnalysisPage from './pages/SentimentAnalysisPage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/evaluate",
      element: <SentimentAnalysisPage />
    },
  ])

  return <RouterProvider router={router} />
}

export default App
