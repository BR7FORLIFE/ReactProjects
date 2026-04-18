import { Link } from "react-router";

export default function Message(){

    return <>
    <p>Este es un mensaje</p>
    <Link to="/bye">Cambiar a despedida</Link>
    </>
}