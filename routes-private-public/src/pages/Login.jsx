import { useForm } from "../hooks/useForm"

export const Login = () => {



  const { form:datos, handleInputChange, reset } = useForm({
    username: "",
    passaword: ""
  })



  return (
    <div>Login</div>
    
  )
}
