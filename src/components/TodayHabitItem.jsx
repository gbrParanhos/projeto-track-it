import styled from "styled-components"
import check from "/assets/Vector.svg" 
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

const TodayHabitItem = ({id, name, done, currentSequence, highestSequence, getTodayHabits}) => {
  const userData = useContext(UserContext);
  const token = userData && userData.token;

  const checkHabit = () => {
    const toggle = done ? 'uncheck' : 'check';
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${toggle}`,undefined ,config)
    .then(res => {
      console.log(res.data);
      getTodayHabits();
    })
    .catch(res => console.log(res))
  }

  return(
    <StyledItem>
      <HabitData>
        <HabitTitle>{name}</HabitTitle>
        <HabitDescription>
          Sequência atual: {currentSequence} dias
          <br/>
          Seu recorde: {highestSequence} dias
        </HabitDescription>
      </HabitData>
      <CheckBox onClick={checkHabit} done={done.toString()}><img src={check} alt="check-mark" /></CheckBox>
    </StyledItem>
  )
}

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
`

const HabitData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const HabitTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #666666;
  max-width: 200px;
`

const HabitDescription = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
`

const CheckBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  background-color: ${({done}) => done === 'true' ? '#8FC549' : '#EBEBEB' };
`

export default TodayHabitItem