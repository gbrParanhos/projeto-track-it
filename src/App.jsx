import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useContext, useState } from "react"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  return (
    <BrowserRouter>
      <Routes isLogged={token} >
        <Route path="/" element={<Layout token={token} ><Login /></Layout>}/>
        <Route path="/cadastro" element={<Layout token={token} ><Register /></Layout>}/>
      </Routes>
    </BrowserRouter>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({token})=> !token ? '70px 0' : '0'};
  background-color: ${({token})=> !token ? 'white' : '#F2F2F2'};
  width: 100vw;
  min-height: 100vh;
`

export default App