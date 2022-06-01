import * as React from "react"
import { AppRouter } from "./routers/AppRouter"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { useReducer } from "react"

const init = () => {
  // @ts-ignore
  return JSON.parse(localStorage.getItem("user")) || { logged: false }
}

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
