import { useReducer } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {DataContext} from './store/context'
import reducers, {initialState} from './store/reducers'
import Home from './screen/Home'


const App = () => {

  const [state, dispatch] = useReducer(reducers, initialState)
  
  return (
    <DataContext.Provider value={{state, dispatch}}>
      <Router>
        <Route path='/page/:pageNumber' component={Home} exact />
        <Route path='/' component={Home} exact />
      </Router>
    </DataContext.Provider>
  )
}

export default App;
