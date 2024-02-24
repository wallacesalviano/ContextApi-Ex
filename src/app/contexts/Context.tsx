import { useReducer, createContext, ReactNode } from "react";
import { UserType, userInitialState, userReducer } from "../reducers/useReducer";
import { reducerActionTypes } from "../Types/reducerActionTypes";

type initialStateType = {
    user: UserType;
};

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<reducerActionTypes>;
};

const initialState = {
    user: userInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null,
});

export const mainReducer = (state: initialStateType, action: reducerActionTypes) => ({
    user: userReducer(state.user, action)
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}      
        </Context.Provider>
    );
};
