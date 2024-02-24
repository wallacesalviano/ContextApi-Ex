"use client"
import { useContext } from "react";
import { Context } from "../contexts/Context";
import Link from "next/link";

const Page = () => {
    const { state, dispatch } = useContext(Context);

    const handleChangeName = () => {
        dispatch({
            type:'CHANGE_NAME',
            payload: {
                name: 'Pedro'
            }
        });
    }

    return (
        <div id="signUp" className="flex flex-col">
            <h1 className="text-3xl">Página de {state.user.name} que tem {state.user.age} anos</h1>
            <hr />
            <Link href='/showData' className="my-5">
                Ir para o ShowData
            </Link>
            <Link href='/#Main'>
                Ir para Main
            </Link>

            <div>
                <button onClick={handleChangeName} className="bg-gray-400 rounded p-3 mt-3 hover:bg-gray-500">
                    Trocar Nome
                </button>
            </div>
        </div>
    );
}

export default Page