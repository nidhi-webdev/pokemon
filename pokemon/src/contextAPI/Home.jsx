import  { useContext } from 'react'
import { BoiContext } from '../contextAPI/ContextApi'

const Home = () => {

const useData = useContext(BoiContext)

  return (
    <div>
      <h1> My Name is {useData} </h1>
    </div>
  )
}

export default Home
