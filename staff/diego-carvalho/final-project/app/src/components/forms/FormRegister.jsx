import { Input, SuccessButton  } from "./elements"
import './FormRegister.sass'

export const FormRegister = ({className, ...props}) => {

  return <>
    <form className={`Form ${className}`} {...props}>
      <Input type="text" name="name" placeholder="Name"/>
      <Input type="text" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      {/* <Input type="password" name="password" placeholder="Repeat password" /> */}
      <SuccessButton type="submit" >
          Registrar
      </SuccessButton>
    </form>
  </>

}