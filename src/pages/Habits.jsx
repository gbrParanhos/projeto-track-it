import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styled from "styled-components"
import HabitsForm from "../components/HabitsForm"
import HabitsList from "../components/HabitsList"
import UserContext from "../contexts/UserContext"

const Habits = () => {
  const {token} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) navigate('/')
  },[])

  return(
    <>
      <Header />
      <StyledHabits>
        <ContentHeader>
          <TitleContent>Meus hábitos</TitleContent>
          <NewHabit>+</NewHabit>
        </ContentHeader>
        <HabitsForm/>
        <HabitsList/>
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