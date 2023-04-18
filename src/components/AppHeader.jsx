import { Link, NavLink, useNavigate } from "react-router-dom"


export function AppHeader(props) {

    const navigate = useNavigate()

    function onBack() {
        navigate(-1)
    }

    return (
        <header className="app-header">
            <section className="container">
                <h1 className="logo">contacts</h1>
                <section className="back">
                    <button onClick={onBack}>back</button>
                </section>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">contacts</NavLink>
                </nav>
            </section>
        </header>
    )
}

// export const AppHeader = withRouter(_AppHeader)