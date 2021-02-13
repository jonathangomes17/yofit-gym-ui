import React, { createContext, useReducer } from 'react'
import { getSession } from '../services/session'
import globalReducer from './reducers'
import { IState } from './types'

let initialArg: IState = {
  session: getSession()
}

const GlobalContext = createContext<IState | any>(initialArg)

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialArg)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

export { GlobalContext }
