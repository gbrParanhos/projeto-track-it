import styled, { keyframes } from "styled-components"
import logo from "/assets/Logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import UserContext from "../contexts/UserContext"

const Register = () => {
  const userData = useContext(UserContext)
  const token = userData && userData.token
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (token) navigate('/habits')
  },[])

  const createAccount = (e) => {
    e.preventDefault();
    setLoading(true);
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
    const body = {email, password, name, image};
    axios.post(URL,body)
    .then(res => {
      console.log('Usuário criado com sucesso');
      navigate('/');
    })
    .catch(res => {
      setLoading(false);
      alert(res.response.data.message);
    })
  }

  return(
    <StyledRegister>
      <StyledImg src={logo} alt="logo TrackIt" />
      <UserRegister>
        <FormRegister onSubmit={createAccount}>
          <StyledInput
            disabled={loading}
            required
            type="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <StyledInput
            disabled={loading}
            required
            type="password"
            placeholder="senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <StyledInput
            disabled={loading}
            required
            type="text"
            placeholder="nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <StyledInput
            disabled={loading}
            required
            type="url"
            placeholder="foto"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          <StyledButton disabled={loading} isloading={loading.toString()} type="submit">{ loading ? <Loader /> : 'Cadastrar' }</StyledButton>
        </FormRegister>
        <StyledLink disabled={loading} isloading={loading.toString()} to={'/'} >Já tem uma conta? Faça login!</StyledLink>
      </UserRegister>
    </StyledRegister>
  )
}

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
`

const StyledImg = styled.img`
  width: 180px;
`

const UserRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
`

const FormRegister = styled.form`
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

export default Register