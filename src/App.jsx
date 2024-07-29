import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Habits from "./pages/Habits"
import { useState } from "react"
import UserContext from "./contexts/UserContext"
import Footer from "./components/Footer"

const App = () => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));

  return (
    <UserContext.Provider value={userData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout token={userData && userData.token} ><Login setUserData={setUserData} /></Layout>}/>
          <Route path="/cadastro" element={<Layout token={userData && userData.token} ><Register /></Layout>}/>
          <Route path="/habitos" element={<Layout token={userData && userData.token} ><Habits /></Layout>}/>
          <Route path="/hoje" element={<Layout token={userData && userData.token} ></Layout>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({token})=> token ? '100px 20px' : '70px 0'};
  background-color: ${({token})=> token ? '#F2F2F2' : 'white'};
  width: 100vw;
  min-height: 100dvh;
`

export default App