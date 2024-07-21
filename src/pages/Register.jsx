import styled from "styled-components"
import logo from "/assets/Logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Register = ({token}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    if (token) navigate('/habits')
  },[])

  const createAccount = (e) => {
    e.preventDefault();
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
    const body = {email, password, name, image};
    axios.post(URL,body)
    .then(res => {
      console.log('Usuário criado com sucesso');
      navigate('/');
    })
    .catch(res => console.log(res))
  }

  return(
    <StyledRegister>
      <StyledImg src={logo} alt="logo TrackIt" />
      <UserRegister>
        <FormRegister onSubmit={createAccount}>
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
          <StyledInput
            required
            type="text"
            placeholder="nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <StyledInput
            required
            type="url"
            placeholder="foto"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          <StyledButton>Cadastrar</StyledButton>
        </FormRegister>
        <StyledLink to={'/'} >Já tem uma conta? Faça login!</StyledLink>
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

export default Register