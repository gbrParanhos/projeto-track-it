import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext";
import styled from "styled-components"
import axios from "axios";

const HabitsForm = ({getHabits,setOpenedForm}) => {
  const userData = useContext(UserContext);
  const token = userData && userData.token;
  const formStorage = JSON.parse(localStorage.getItem('formData')) || {name:'', days:[]};
  const [formData, setFormData] = useState(formStorage)
  
  const toggleDays = (day) => {
    const listDays = [...formData.days];
    if (formData.days.includes(day)) {
      const i = listDays.indexOf(day);
      listDays.splice(i,1);
    } else {
      listDays.push(day);
    }
    setFormData({...formData,days:listDays});
    localStorage.setItem('formData', JSON.stringify({...formData,days:listDays}));
  }

  const createHabit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", formData, config)
    .then(res => {
      console.log(res.data);
      localStorage.removeItem('formData');
      setOpenedForm(false);
      getHabits();
    })
    .catch(res => console.log(res))
  }

  return(
    <StyledForm onSubmit={createHabit}>
      <FillContainer>
        <StyledInput
          placeholder="nome do hábito"
          value={formData.name}
          onChange={e=>setFormData({...formData,name:e.target.value})}
          onBlur={() => localStorage.setItem('formData', JSON.stringify(formData))}
        />
        <SelectWeekdays>
          <Weekday type="button" onClick={() => toggleDays(0)} days={formData.days.includes(0).toString()} >D</Weekday>
          <Weekday type="button" onClick={() => toggleDays(1)} days={formData.days.includes(1).toString()} >S</Weekday>
          <Weekday type="button" onClick={() => toggleDays(2)} days={formData.days.includes(2).toString()} >T</Weekday>
          <Weekday type="button" onClick={() => toggleDays(3)} days={formData.days.includes(3).toString()} >Q</Weekday>
          <Weekday type="button" onClick={() => toggleDays(4)} days={formData.days.includes(4).toString()} >Q</Weekday>
          <Weekday type="button" onClick={() => toggleDays(5)} days={formData.days.includes(5).toString()} >S</Weekday>
          <Weekday type="button" onClick={() => toggleDays(6)} days={formData.days.includes(6).toString()} >S</Weekday>
        </SelectWeekdays>
      </FillContainer>
      <ButtonsContainer>
        <CancelButton type="button" onClick={() => setOpenedForm(false)} >Cancelar</CancelButton>
        <SaveButton type="submit" >Salvar</SaveButton>
      </ButtonsContainer>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  row-gap: 30px;
  border-radius: 5px;
  background-color: white;
`

const FillContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const StyledInput = styled.input`
  width: 100%;
  padding-left: 10px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  font-size: 20px;
  font-weight: 400;
  color: #666666;
  &:focus {
    outline: 1px solid black;
  }
  &::placeholder{
    color: #DBDBDB;
  }
`

const SelectWeekdays = styled.div`
  display: flex;
  column-gap: 5px;
  width: 100%;
`

const Weekday = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  font-size: 20px;
  font-weight: 400;
  background-color: ${({days}) => days === "true" ? '#DBDBDB' : 'white'};
  color: ${({days}) => days === "true" ? 'white' : '#DBDBDB'};
`

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 25px;
  justify-content: flex-end;
`

const CancelButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #52B6FF;
`

const SaveButton = styled.button`
  width: 85px;
  height: 35px;
  border-radius: 5px;
  background-color: #52B6FF;
  font-size: 16px;
  font-weight: 400;
  color: white;
`

export default HabitsForm