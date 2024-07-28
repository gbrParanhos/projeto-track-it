import styled from "styled-components"

const HabitsForm = () => {
  return(
    <StyledForm>
      <FillContainer>
        <StyledInput placeholder="nome do hábito" />
        <SelectWeekdays>
          <Weekday>D</Weekday>
          <Weekday>S</Weekday>
          <Weekday>T</Weekday>
          <Weekday>Q</Weekday>
          <Weekday>Q</Weekday>
          <Weekday>S</Weekday>
          <Weekday>S</Weekday>
        </SelectWeekdays>
      </FillContainer>
      <ButtonsContainer>
        <CancelButton>Cancelar</CancelButton>
        <SaveButton>Salvar</SaveButton>
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
  color: #DBDBDB;
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