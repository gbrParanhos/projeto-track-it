import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import UserContext from "../contexts/UserContext"
import TodayHabitItem from "./TodayHabitItem"
import axios from "axios"
import loadingGif from "/assets/Loading.gif"

const TodayHabitsList = () => {
  const userData = useContext(UserContext);
  const token = userData && userData.token;
  const [todayHabitsList, setTodayHabitsList] = useState(null)

  const getTodayHabits = () => {
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    .then(res => setTodayHabitsList(res.data))
    .catch(res => console.log(res))
  }

  useEffect(() => getTodayHabits(),[])
  
  if ( todayHabitsList === null ) return <img src={loadingGif} alt="Loading" />
  
  return(
    <StyledList>
      {todayHabitsList.map(habit => (
        <TodayHabitItem key={habit.id} id={habit.id} name={habit.name} done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} getTodayHabits={getTodayHabits} />
      ))}
      {todayHabitsList.length === 0 && <EmptyList>Você não tem nenhum hábito cadastrado hoje.</EmptyList>}
    </StyledList>
  )
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const EmptyList = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #666666;
`

export default TodayHabitsList