import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginInfo from "../components/LoginInfo"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const apiUrl = "http://127.0.0.1:8080/login"

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
        console.error("Error logging in:", data.message)
      }
    } catch (error) {
      console.error("Error logging in:", error)
    }
  }

  return (
    <>
        <h2>Login to use sentiment analysis</h2>        
        <form onSubmit={handleLogin}>
            <div>
            <label>Username</label>
            <input
                type="string"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit">
                Login
            </button>
        </form>
        <LoginInfo />
    </>
  )
}

export default LoginPage
