import styled from "styled-components"
import HabitItem from "./HabitItem"
import loadingGif from "/assets/Loading.gif"

const HabitsList = ({habitsList}) => {
  
  if ( habitsList === null ) return <img src={loadingGif} alt="Loading" />
  
  return(
    <StyledList>
      {habitsList.map(habit => (
        <HabitItem key={habit.id} name={habit.name} days={habit.days} />
      ))}
      {habitsList.length === 0 && <EmptyList>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</EmptyList>}
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

export default HabitsList