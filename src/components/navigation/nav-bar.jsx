import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to={`/`} className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> 
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to={`daily-tracker`} className="navbar-item">
                        Daily Tracker
                    </Link>

                    <Link to={`weekly-view`} className="navbar-item">
                        Weekly View
                    </Link>

                    <Link to={`monthly-view`} className="navbar-item">
                        Monthly View
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Management
                        </a>

                        <div className="navbar-dropdown">
                            <Link to={`food-management`} className="navbar-item">
                                Food Management
                            </Link>
                            <Link to={`personal-management`} className="navbar-item">
                                Personal Management
                            </Link>
                            <hr className="navbar-divider"/>
                            {/* Legacy feature for feedback */}
                                {/* <a className="navbar-item">
                                    Report an issue
                                </a> */}
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar 