import styled from "styled-components"
import logo from "/assets/Logo.svg"
import { Link } from "react-router-dom"

const Login = () => {
  return(
    <StyledLogin>
      <StyledImg src={logo} alt="logo TrackIt" />
      <UserLogin>
        <FormLogin>
          <StyledInput type="email" placeholder="email" />
          <StyledInput type="password" placeholder="senha" />
          <StyledButton>Entrar</StyledButton>
        </FormLogin>
        <StyledLink to={'/cadastro'} >Não tem uma conta? Cadastre-se!</StyledLink>
      </UserLogin>
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
`

const StyledImg = styled.img`
  width: 180px;
`

const UserLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
`

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  row-gap: 5px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  &::placeholder {
    font-size: 20px;
    font-weight: 400;
    color: #DBDBDB;
  }
`

const StyledButton = styled.button`
  background-color: #52B6FF;
  color: white;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
`

const StyledLink = styled(Link)`
  color: #52B6FF;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`

export default Login