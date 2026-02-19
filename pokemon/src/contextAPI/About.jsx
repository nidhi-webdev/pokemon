import React, { useContext } from 'react'
import { BoiContext } from '../contextAPI/ContextApi'


const About = () => {
const {name , age} = useContext(BoiContext)


  return (
    <div>
      <h1> My Name is {name} (About), {age}</h1>
    </div>
  )
}

export default About
