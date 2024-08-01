import styled from "styled-components"

const HabitItem = ({name, days}) => {
  return(
    <StyledItem>
      <HabitTitle>{name}</HabitTitle>
      <Weekdays>
        <Weekday type="button" days={days.includes(0).toString()} >D</Weekday>
        <Weekday type="button" days={days.includes(1).toString()} >S</Weekday>
        <Weekday type="button" days={days.includes(2).toString()} >T</Weekday>
        <Weekday type="button" days={days.includes(3).toString()} >Q</Weekday>
        <Weekday type="button" days={days.includes(4).toString()} >Q</Weekday>
        <Weekday type="button" days={days.includes(5).toString()} >S</Weekday>
        <Weekday type="button" days={days.includes(6).toString()} >S</Weekday>
      </Weekdays>
    </StyledItem>
  )
}

const StyledItem = styled.form`
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
  background-color: ${({days}) => days === "true" ? '#DBDBDB' : 'white'};
  color: ${({days}) => days === "true" ? 'white' : '#DBDBDB'};
`

export default HabitItem