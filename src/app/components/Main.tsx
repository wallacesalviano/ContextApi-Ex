import Link from "next/link";

export const Main = () => {
    return (
        <div id="Main" className="flex flex-col">
            <h1 className="text-3xxl">Pagina Main</h1>
            <hr />
            <Link href='/signUp' className="my-5">
                Ir para o SignUp
            </Link>
            <Link href='/showData'>
                Ir para o showData
            </Link>
        </div>

    );
}