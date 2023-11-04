import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import DailyTracker from "./pages/daily-tracker"
import MonthlyView from "./pages/monthly-view" 
import WeeklyView from "./pages/weekly-view" 
import FoodItemManagement from "./pages/food-item-management" 
import PersonalManagement from "./pages/personal-management"
import Error from "./layouts/error";
import Root from "./layouts/root";

import './App.css'
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "daily-tracker",
        element: <DailyTracker/>,
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
    ]
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
