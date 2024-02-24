import { reducerActionTypes } from "../Types/reducerActionTypes";

export type UserType = {
    name: string;
    age: number;
}

export const userInitialState: UserType = {
    name: 'Wallace',
    age: 26
}

export const userReducer = (state: UserType, action: reducerActionTypes) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload.name }
        case 'CHANGE_AGE':
            return { ...state, age: action.payload.age }
        default:
            return state
    }
}