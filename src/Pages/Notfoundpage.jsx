import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <div>
            This page doesnt wexist. Go <Link to="/">home</Link>
        </div>
    )
}

export {Notfound}