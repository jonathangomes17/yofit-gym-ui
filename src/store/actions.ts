import { Dispatch } from 'react'
import { IAction, IPayload } from './types'

function setSession(dispatch: Dispatch<IAction>, payload : IPayload) {
  dispatch({
    type: 'SET_SESSION',
    payload
  })
}

export { setSession }
