import { types } from "../types/types"
import { AuthState } from "../interfaces/interfaces"

// type AuthAction =
//   | { type: "login"; payload: User }
//   | { type: "logout"; payload: User }

export const authReducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      }
    case types.logout:
      return {
        logged: false,
      }
    default:
      break
  }
}
