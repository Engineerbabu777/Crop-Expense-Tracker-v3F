
import {atom} from 'recoil';


// INTERFACE FOR OUR AUTH MODAL!
export interface DataAtom {
    open: boolean;
    view: 'ELEC' | "PLOU" | 'DIES' | 'MISC' | 'FERT' | 'PEST' | "";
}


// DEFAULT STATE
const defaultState:DataAtom = {
    open: false,
    view: ''
}


// CREATING STORE ATOM WITH RECOIL
export const DataState = atom<DataAtom>({
    key: 'dataState0987654321',
    default: defaultState
}) 

