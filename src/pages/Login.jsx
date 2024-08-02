import styled, { keyframes } from "styled-components"
import logo from "/assets/Logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import UserContext from "../contexts/UserContext"

const Login = ({setUserData}) => {
  const userData = useContext(UserContext)
  const token = userData && userData.token
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (token) navigate('/habitos')
  },[])

  const acessAccount = (e) => {
    e.preventDefault();
    setLoading(true);
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
    const body = {email, password}
    axios.post(URL, body)
    .then(res => {
      console.log("resposta", res);
      localStorage.setItem('userData', JSON.stringify({token:res.data.token,image:res.data.image}));
      setUserData({token:res.data.token,image:res.data.image});
      setLoading(false);
      navigate('/habitos');
    })
    .catch(res => {
      setLoading(false)
      alert(res.response.data.message);
    })
  }

  return(
    <StyledLogin>
      <StyledImg src={logo} alt="logo TrackIt" />
      <UserLogin>
        <FormLogin onSubmit={acessAccount} >
          <StyledInput
            required
            disabled={loading}
            type="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <StyledInput
            required
            disabled={loading}
            type="password"
            placeholder="senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <StyledButton disabled={loading} isloading={loading.toString()} type="submit" >{ loading ? <Loader /> : 'Entrar' }</StyledButton>
        </FormLogin>
        <StyledLink disabled={loading} isloading={loading.toString()} to={'/cadastro'} >Não tem uma conta? Cadastre-se!</StyledLink>
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
  opacity: ${({isloading}) => isloading === 'true' ? 0.7 : 1};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #52B6FF;
  color: white;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
`

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  width: 25px;
  height: 25px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`

const StyledLink = styled(Link)`
  opacity: ${({isloading}) => isloading === 'true' ? 0.7 : 1};
  color: #52B6FF;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`

export default Login