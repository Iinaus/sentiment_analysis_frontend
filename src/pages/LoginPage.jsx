import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginInfo from "../components/LoginInfo"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    //navigate("/evaluate")    
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
