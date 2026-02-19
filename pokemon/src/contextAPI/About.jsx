import { useBoiContext } from '../contextAPI/ContextApi'


const About = () => {
const {name , age} = useBoiContext()

  return (
    <div>
      <h1> My Name is {name} (About), {age}</h1>
    </div>
  )
}

export default About
