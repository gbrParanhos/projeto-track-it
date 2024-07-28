import styled from "styled-components"

const HabitsList = () => {
  return(
    <StyledList>
      <HabitsItem>
        <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
        <Weekdays>
          <Weekday>D</Weekday>
          <Weekday>S</Weekday>
          <Weekday>T</Weekday>
          <Weekday>Q</Weekday>
          <Weekday>Q</Weekday>
          <Weekday>S</Weekday>
          <Weekday>S</Weekday>
        </Weekdays>
      </HabitsItem>
      <EmptyList>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</EmptyList>
    </StyledList>
  )
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const HabitsItem = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  padding: 20px;
  row-gap: 10px;
  border-radius: 5px;
  background-color: white;
`

const HabitTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #666666;
`

const Weekdays = styled.div`
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

const EmptyList = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #666666;
`

export default HabitsList