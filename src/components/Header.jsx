import styled from "styled-components"

const Header = ({userImage}) => {
  return(
    <StyledHeader>
      <AppTitle>TrackIt</AppTitle>
      <UserImage src={userImage} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 20px;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px 0px #00000026;
`

const AppTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: white;
`

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 98.5px;
`

export default Header