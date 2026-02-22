import Pokemon from './Pokemon'
import UserefExample from './useEffect/Example'
import { UseRefParent } from './useEffect/UseRef'
import UserId from './useId/UserId'
import Home from './contextAPI/Home'
import About from './contextAPI/About'
import { BioProvider } from './contextAPI/ContextApi'
import { DarkLightComp, ThemeProvider } from './contextAPI/DaskLight'
import { UseReducer } from './useReducer/UseReducer'
import { ReactMemoParent } from './memo/ReactMemo'
import { MemoParentComponent } from './memo/UseMemo'



const App = () => {
  return (
    <div>
      {/* <Pokemon /> */}
      {/* <UserefExample /> */}
      {/* <UseRefParent /> */}
      {/* <UserId /> */}

      {/* We have to write the component under this tag to make it children of it */}
      {/* <BioProvider>
        <Home />
        <About />
      </BioProvider> */}

      {/* <ThemeProvider>
        <DarkLightComp />
      </ThemeProvider> */}

      {/* <UseReducer /> */}

      {/* <ReactMemoParent /> */}
      <MemoParentComponent />
    </div>
  )
}

export default App
