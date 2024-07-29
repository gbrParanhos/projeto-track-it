import styled from "styled-components"
import HabitsIcon from "./HabitsIcon"
import TodayIcon from "./TodayIcon"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return(
    <StyledFooter>
      <ContainerButton to="/habitos">
        {({isActive}) => (
          <NavButton
            backgroundcolor={isActive ? '#52B6FF' : 'white'} color={isActive ? 'white' : '#D4D4D4'}
          >
            <HabitsIcon
              color={isActive ? 'white' : '#D4D4D4'}
            />
            Hábitos
          </NavButton>
        )}
      </ContainerButton>
      <ContainerButton to="/hoje">
        {({isActive}) => (
          <NavButton
            backgroundcolor={isActive ? '#52B6FF' : 'white'}
            color={isActive ? 'white' : '#D4D4D4'}
          >
            <TodayIcon
              color={isActive ? 'white' : '#D4D4D4'}
            />
            Hoje
          </NavButton>
        )}
      </ContainerButton>
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

const ContainerButton = styled(NavLink)`
  display: flex;
  width: 50%;
  height: 100%;
`

const NavButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  width: 100%;
  height: 100%;
  background-color: ${({backgroundcolor})=> backgroundcolor};
  color: ${({color})=> color};
  font-size: 18px;
  font-weight: 400;
`

export default Footer