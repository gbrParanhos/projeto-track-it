import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styled from "styled-components"
import HabitsForm from "../components/HabitsForm"
import UserContext from "../contexts/UserContext"
import axios from "axios"
import TodayHabitsList from "../components/TodayHabitsList"
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

const Today = () => {
  const userData = useContext(UserContext);
  const token = userData && userData.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/')
  },[]);

  return(
    <>
      <Header />
      <StyledToday>
        <TitleContent>{dayjs().format("dddd")}, {dayjs().format('DD/MM')}</TitleContent>
        <TodayHabitsList />
      </StyledToday>
      <Footer />
    </>
  )
}

const StyledToday = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
`

const TitleContent = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #126BA5;
  text-transform: capitalize;
`

export default Today