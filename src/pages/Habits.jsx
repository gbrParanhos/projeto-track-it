import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styled from "styled-components"
import HabitsForm from "../components/HabitsForm"
import HabitsList from "../components/HabitsList"
import UserContext from "../contexts/UserContext"
import axios from "axios"

const Habits = () => {
  const userData = useContext(UserContext);
  const token = userData && userData.token;
  const navigate = useNavigate();
  const [habitsList, setHabitsList] = useState(null);
  const [openedForm, setOpenedForm] = useState(false);

  useEffect(() => {
    if (!token) navigate('/')
  },[]);

  const getHabits = () => {
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    .then(res => setHabitsList(res.data))
    .catch(res => console.log(res))
    
  }

  useEffect(() => getHabits(),[]);

  const openForm = () => setOpenedForm(true)

  return(
    <>
      <Header />
      <StyledHabits>
        <ContentHeader>
          <TitleContent>Meus hábitos</TitleContent>
          <NewHabit onClick={openForm}>+</NewHabit>
        </ContentHeader>
        {openedForm && <HabitsForm getHabits={getHabits} setOpenedForm={setOpenedForm} />}
        <HabitsList habitsList={habitsList} />
      </StyledHabits>
      <Footer />
    </>
  )
}

const StyledHabits = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
`

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

`

const TitleContent = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #126BA5;
`

const NewHabit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 35px;
  padding-bottom: 5px;
  border-radius: 5px;
  background-color: #52B6FF;
  font-size: 28px;
  font-weight: 400;
  color: white;
  text-align: center;
`

export default Habits