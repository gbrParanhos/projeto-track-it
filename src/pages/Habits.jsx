import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Habits = ({token, userImage}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) navigate('/')
  },[])

  return(
    <>
      <Header userImage={userImage} />
      <Footer />
    </>
  )
}

export default Habits