import { NavLink, useNavigate } from "react-router-dom"


export function AppHeader(props) {

    const navigate = useNavigate()

    function onBack() {
        navigate(-1)
    }

    return (
        <header className="app-header">
            <section className="container">
                <h1 className="logo">Mister bitCoin</h1>
                <section className="back">
                    <button onClick={onBack}>Back 1 page</button>
                </section>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">contacts</NavLink>
                    <NavLink to="/market-price">market-price</NavLink>
                </nav>
            </section>
        </header>
    )
}

// export const AppHeader = withRouter(_AppHeader)