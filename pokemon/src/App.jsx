import Pokemon from './Pokemon'
import UserefExample from './useEffect/Example'
import { UseRefParent } from './useEffect/UseRef'
import UserId from './useId/UserId'
import Home from './contextAPI/Home'
import About from './contextAPI/About'
import { BioProvider } from './contextAPI/ContextApi'


const App = () => {
  return (
    <div>
      {/* <Pokemon /> */}
      {/* <UserefExample /> */}
      {/* <UseRefParent /> */}
      {/* <UserId /> */}

{/* We have to write the component under this tag to make it children of it */}
      <BioProvider>
        <Home />
        
      </BioProvider>
      <About />

    </div>
  )
}

export default App
