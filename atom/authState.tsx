
import {atom} from 'recoil';

// INTERFACE FOR OUR AUTH MODAL!
export interface AuthAtom {
    open: boolean
}


// DEFAULT STATE
const defaultState:AuthAtom = {
    open: false,
}


// CREATING STORE ATOM WITH RECOIL
export const AuthState = atom<AuthAtom>({
    key: 'authState123456',
    default: defaultState
}) 




