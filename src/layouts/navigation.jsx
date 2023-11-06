import { useState } from "react";
import { Outlet } from "react-router";

import NavBar from "../components/navigation/nav-bar";

const Navigation = () => {

    const [homescreen, toggleNav] = useState(true);

    return (
        <main>
            <NavBar/>
            <Outlet/>
        </main>
    )
}

export default Navigation 