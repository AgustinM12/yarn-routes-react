import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate } from 'react-router-dom'

export const PublicRoutes = () => {
  const { isLogged } = useContext(AuthContext)



  return (!isLogged)
    ? children
    : <Navigate to={"/"} />
}
