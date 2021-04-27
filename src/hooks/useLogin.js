import { useState, useEffect } from 'react'

const useLogin = () => {
  const [logged, setLogged] = useState(false)

  const login = () => {
    setLogged(true)
  }

  const logout = () => {
    setLogged(false)
  }

  return [login, logout]
}

export default useLogin;