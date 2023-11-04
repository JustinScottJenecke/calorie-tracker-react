import { Outlet } from "react-router";
import NavMenu from "../components/navigation/nav-menu";

const Root = () => {

    return (
        <main>
            <h1>Root</h1>
            <NavMenu/>
            <Outlet/>
        </main>
    )
}

export default Root 