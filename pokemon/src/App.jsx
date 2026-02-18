import Pokemon from './Pokemon'
import UserefExample from './useEffect/Example'
import { UseRefParent } from './useEffect/UseRef'
import UserId from './useId/UserId'
import Home from './contextAPI/Home'


const App = () => {
  return (
    <div>
      {/* <Pokemon /> */}
      {/* <UserefExample /> */}
      {/* <UseRefParent /> */}
      {/* <UserId /> */}

      <BoiProvider>
        <Home />
      </BoiProvider>

    </div>
  )
}

export default App
