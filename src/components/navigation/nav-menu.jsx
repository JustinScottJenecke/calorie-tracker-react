import { Link } from "react-router-dom"

const NavMenu = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to={`daily-tracker`}>Daily Tracker</Link>
                </li>
                <li>
                    <Link to={`weekly-view`}>Weekly View</Link>
                </li>
                <li>
                    <Link to={`monthly-view`}>Monthly View</Link>
                </li>
                <li>
                    <Link to={`food-management`}>Food Management</Link>
                </li>
                <li>
                    <Link to={`personal-management`}>Personal Management</Link>
                </li>
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