

import {atom} from 'recoil';


// TS!
 export interface mainModel {
    show: boolean
    view: 'profit' | 'debt' | 'expenses' | 'sold'
 }

// INITAIL!

const initialMainModelState:mainModel = {
    show: false,
    view:'profit',  // profit, debt, expenses, sold
}

// CREATE!
export const MainModelState = atom<mainModel>({
    default: initialMainModelState,
    key: '123245redshzb'
})