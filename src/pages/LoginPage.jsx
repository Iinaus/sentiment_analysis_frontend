import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import LoginInfo from "../components/LoginInfo"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        handleLogin(e)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const apiUrl = "https://sentiment-analysis-backend-cloud-computing-backend.2.rahtiapp.fi/login"

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok) {
        sessionStorage.setItem("authToken", data.token)
        navigate("/evaluate")
      } else {
        console.error("Error logging in:", data.error)
        toast.error("Login failed, please check your credentials", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
        })
      }

    } catch (error) {
      console.error("Error logging in:", error)
      toast.error("An unexpected error occurred. Please try again later.", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
        })
    } finally {
        setUsername("")
        setPassword("")
    }
  }

  return (
    <>
        <h2>Login to use sentiment analysis</h2>        
        <form onSubmit={handleLogin}>
            <div>
            <label>Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown= {handleKeyDown}
                required
            />
            </div>
            <div>
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown= {handleKeyDown}
                required
            />
            </div>
            <button type="submit">
                Login
            </button>
        </form>
        <LoginInfo />
        <ToastContainer />
    </>
  )
}

export default LoginPage
