import styled from "styled-components"
import habitsIcon from "/assets/habits-icon.svg"
import todayIcon from "/assets/today-icon.svg"

const Footer = () => {
  return(
    <StyledFooter>
      <HabitsButton><StyledIcon src={habitsIcon} />Hábitos</HabitsButton>
      <TodayButton><StyledIcon src={todayIcon} />Hoje</TodayButton>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
`

const HabitsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 50%;
  height: 100%;
  background: #52B6FF;
  color: white;
  font-size: 18px;
  font-weight: 400;
`

const TodayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 50%;
  height: 100%;
  background: white;
  color: #D4D4D4;
  font-size: 18px;
  font-weight: 400;
`

const StyledIcon = styled.img`
  width: 25px;
`

export default Footer