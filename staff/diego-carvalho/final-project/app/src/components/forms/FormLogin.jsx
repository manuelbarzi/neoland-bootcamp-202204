import { Input, SuccessButton  } from "./elements"
import './FormLogin.sass'

export const FormLogin = ({className, ...props}) => {

  return <>
    <form className={`Form-login ${className}`} {...props}>
     
      <Input type="text" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
  
      <SuccessButton type="submit" >
          Login
      </SuccessButton>
    </form>
  </>

}