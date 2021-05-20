import { useReducer } from 'react'
import {DataContext} from './store/context'
import reducers, {initialState} from './store/reducers'
import Home from './screen/Home'


const App = () => {

  const [state, dispatch] = useReducer(reducers, initialState)
  
  return (
    <DataContext.Provider value={{state, dispatch}}>
      <Home />
    </DataContext.Provider>
  )
}

export default App;
