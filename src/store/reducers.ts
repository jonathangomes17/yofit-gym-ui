import { setSession } from '../services/session';

function globalReducer(state: any, action: any) {
    switch (action.type) {
        case 'SET_SESSION':
            const { session } = action.payload

            setSession(session);

            return {
                ...state,
                session,
            }

        default:
            return state
    }
}

export default globalReducer
