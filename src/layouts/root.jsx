import { useState } from "react";
import { Outlet } from "react-router";

import NavMenu from "../components/navigation/nav-menu";
import NavBar from "../components/navigation/nav-bar";

const Root = () => {

    const [homescreen, toggleNav] = useState(true);

    return (
        <main>
            <h1 className="title">Root</h1>
            { homescreen ? <NavMenu/> : <NavBar/>}
            <Outlet/>
        </main>
    )
}

export default Root 