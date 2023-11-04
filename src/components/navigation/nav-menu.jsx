import { Link } from "react-router-dom"
// import styles from "./navigation.module.css"

const NavMenu = () => {

    return (
        <nav>
            <ul className='columns is-multiline'>
                <Link to={`daily-tracker`} class='button column is-6'>
                    Daily Tracker
                </Link>
                <Link to={`weekly-view`} class='button column is-6'>
                    Weekly View
                </Link>
                <Link to={`monthly-view`} class='button column is-6'>
                    Monthly View
                </Link>
                <Link to={`food-management`} class='button column is-6'>
                    Food Management
                </Link>
                <Link to={`personal-management`} class='button column is-6'>
                    Personal Management
                </Link>
            </ul>
        </nav>
    )
}

export default NavMenu

/**
 *       
 * {
        path: "tracker",
        element: <DailyView/>,
      },
      {
        path: "weekly-view",
        element: <WeeklyView/>,
      },
      {
        path: "monthly-view",
        element: <MonthlyView/>,
      },
      {
        path: "food-management",
        element: <FoodItemManagement/>,
      },
      {
        path: "personal-management",
        element: <PersonalManagement/>,
      }
 */