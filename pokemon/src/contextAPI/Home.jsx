import  { useContext } from 'react'
import { BoiContext } from '../contextAPI/ContextApi'

const Home = () => {

const {name, age} = useContext(BoiContext)

  return (
    <div>
      <h1> My Name is {name} and he is {age} years of old  </h1>
    </div>
  )
}

export default Home
