export interface AuthState {
  logged: boolean
  user: User[]
}

export interface User {
  name: string
}
