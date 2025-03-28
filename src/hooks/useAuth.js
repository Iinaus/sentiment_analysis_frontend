import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const useAuth = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem('authToken')
    
    if (!token) {
      navigate('/')
      return
    }

    try {
      const decodedToken = jwtDecode(token)
      const currentTime = Date.now() / 1000

      if (decodedToken.exp < currentTime) {
        sessionStorage.removeItem('authToken')
        navigate('/')
      }
      
    } catch (error) {
      console.error("Invalid token", error)
      sessionStorage.removeItem('authToken')
      navigate('/')
    }
  }, [navigate])
}

export default useAuth
