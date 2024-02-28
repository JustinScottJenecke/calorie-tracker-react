import { Link } from "react-router-dom"
// import styles from "../css/navigation/navigation.module.css"

const NavMenu = () => {

    return (
        <nav>
            <ul className='columns is-multiline'>
                <Link to={`daily-tracker`} className='button column is-6 is-info'>
                    Daily Tracker
                </Link>
                <Link to={`weekly-view`} className='button column is-6 is-sucess'>
                    Weekly View
                </Link>
                <Link to={`monthly-view`} className='button column is-6 is-background-warning'>
                    Monthly View
                </Link>
                <Link to={`food-management`} className='button column is-6 is-background-primary'>
                    Food Management
                </Link>
                <Link to={`personal-management`} className='button column is-6 is-background-dark'>
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