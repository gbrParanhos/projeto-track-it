import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Habits = ({token}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) navigate('/')
  },[])

  return(
    <></>
  )
}

export default Habits