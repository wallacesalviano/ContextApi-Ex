"use client"

import Link from "next/link";
import { Context } from "../contexts/Context";
import { useContext } from "react";

const Page = () => {
    const {state, dispatch} = useContext(Context)

    const handleChangeName = () => {
        dispatch({
            type:'CHANGE_NAME',
            payload: {
                name: 'Pedro'
            }
        });
    }

    return (
        <div id="showData" className="flex flex-col">
            <h1 className="text-3xl">Página do {state.user.name}</h1>
            <hr />
            <Link href='/signUp' className="my-5">
                Ir para o SignUp
            </Link>            
            <Link href='/#Main'>
                Ir para Main
            </Link>
            <button onClick={handleChangeName}>
                Trocar o nome para Pedro
            </button>
        </div>
    );
}

export default Page