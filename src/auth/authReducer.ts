import { types } from "../types/types"
import { User } from "../interfaces/interfaces"

export const authReducer = (state: User, action: any) => {
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
      return state
  }
}
