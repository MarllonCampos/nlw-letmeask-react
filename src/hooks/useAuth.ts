import {useContext} from 'react'
import { authContext } from "../contexts/AuthContext";

export function useAuth(){
  const context = useContext(authContext)

  return context
}