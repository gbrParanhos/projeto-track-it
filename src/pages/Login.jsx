import styled from "styled-components"
import logo from "/assets/Logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Login = ({token, setToken, userImage, setUserImage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate('/habitos')
  },[])

  const acessAccount = (e) => {
    e.preventDefault();
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
    const body = {email, password}
    axios.post(URL, body)
    .then(res => {
      console.log("resposta", res);
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userImage', res.data.image)
      setToken(res.data.token)
      setUserImage(res.data.image)
      navigate('/habitos');
    })
    .catch(res => console.log(res))
  }

  return(
    <StyledLogin>
      <StyledImg src={logo} alt="logo TrackIt" />
      <UserLogin>
        <FormLogin onSubmit={acessAccount} >
          <StyledInput
            required
            type="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <StyledInput
            required
            type="password"
            placeholder="senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
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
  &:focus {
    outline: 1px solid black;
  }
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