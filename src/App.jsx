import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Habits from "./pages/Habits"
import { useContext, useState } from "react"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [userImage, setUserImage] = useState(localStorage.getItem('userImage'))
  return (
    <BrowserRouter>
      <Routes isLogged={token} >
        <Route path="/" element={<Layout token={token} ><Login token={token} setToken={setToken} userImage={userImage} setUserImage={setUserImage} /></Layout>}/>
        <Route path="/cadastro" element={<Layout token={token} ><Register token={token} /></Layout>}/>
        <Route path="/habitos" element={<Layout token={token} ><Habits token={token} userImage={userImage} /></Layout>}/>
      </Routes>
    </BrowserRouter>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({token})=> token ? '100px 20px' : '0'};
  background-color: ${({token})=> token ? '#F2F2F2' : 'white'};
  width: 100vw;
  min-height: 100dvh;
`

export default App