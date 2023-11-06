import { useState } from "react";
import { Outlet } from "react-router";

import NavMenu from "../components/navigation/nav-menu";

const Homepage = () => {

    const [homescreen, toggleNav] = useState(true);

    return (
        <main>
            <h1 className="title">Root</h1>
            <NavMenu/>
            <Outlet/>
        </main>
    )
}

export default Homepage 