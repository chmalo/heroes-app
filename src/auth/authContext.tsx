import { createContext } from "react"
import { User } from "../interfaces/interfaces"

export type AuthContextProps = {
  user: User
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)
