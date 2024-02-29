import { useContext } from "react";
import { LoggedUserContext } from "../contexts/Context";

export const Header = () => {
    const loggedUserCtx = useContext(LoggedUserContext);

    const HandleLogout = () => {
        loggedUserCtx?.setName('');
    }

    const HandleLogin = () => {
        loggedUserCtx?.setName('Wallace Salviano');
    }

    return (
        <header className="bg-blue-400 max-w-screen-2xl mx-auto flex justify-between p-4 items-center ">
            <h1 className="text-3xl">Context API</h1>
            {loggedUserCtx?.name &&
                <div className="flex gap-4 items-center p-4">
                    <p className="">Usuário <span className="text-green-700 font-bold">LOGADO</span>: {loggedUserCtx?.name}</p>
                    <button className="border rounded bg-blue-800 p-4" onClick={HandleLogout}>Logout</button>
                </div>
            }
            {(!loggedUserCtx || loggedUserCtx.name === '') &&
                <div className="flex gap-4 items-center p-4">
                    <p>Usuário <span className="text-red-700 font-bold">DESLOGADO</span></p>
                    <button className="border rounded bg-blue-800 p-4" onClick={HandleLogin}>Login</button>
                </div>
            }
        </header>
    );
}