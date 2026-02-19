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

      <BioProvider>
        <Home />
        <About />
      </BioProvider>

    </div>
  )
}

export default App
