import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import DailyView from "./pages/daily-view"
import MonthlyView from "./pages/monthly-view" 
import WeeklyView from "./pages/weekly-view" 
import FoodItemManagement from "./pages/daily-view" 

import './App.css'
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DailyView/>,
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
