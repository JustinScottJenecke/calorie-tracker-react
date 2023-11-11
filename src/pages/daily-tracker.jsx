import TrackerDisplay from "../components/tracker/tracker-display";
import TrackerFoodItemList from "../components/tracker/tracker-food-item-list";
import AddFoodModal from "../components/tracker/add-food-modal";

import { useState } from "react";

const DailyTracker = () => {

    // ========= State Variables ========
    const [dailyEnergy, setEnergy] = useState(0)
    const [dailyProtein, setProtein] = useState(0)
    const [dailyFats, setFats] = useState(0)
    const [dailyCarbs, setCarbs] = useState(0)


    const [dailyFoodItems, setFoodItems] = useState(['oats', 'chicken', 'broccoli', 'rice'])

    // ========= Business Logic =========

    // Macro Calculator
    const addEnergy = (energy) => {
        setEnergy(prev => prev + energy)
    }
    const addFats = (fats) => {
        setFats(prev => prev + fats)
    }
    const addCarbs = (carbs) => {
        setCarbs(prev => {
            return prev + carbs
        })
    }
    const addProtein = (protein) => {
        setProtein( prev => prev + protein)
    }

    // Food Item
    const addMockFoodItem = (FoodItem, energy, protein, fats, carbs) => {
        setEnergy(dailyEnergy + energy)
    }

    return (
        <main>
            <h2 className="title">Daily View</h2>
            <TrackerDisplay/>
            {dailyEnergy}
            <hr />
            Daily Protein: {dailyProtein}
            <br />
            Daily Fats: {dailyFats}
            <br />
            Daily Carbohydrates: {dailyCarbs}
            <hr />
            Daily Food: {
                dailyFoodItems.map(foodItem => {
                    return <li key={foodItem}>{foodItem}</li>
                })
            }
            <hr />
            <TrackerFoodItemList />
            <hr />
            <AddFoodModal />
            <button className="button" onClick={() => {addEnergy(500)}}>Add 100 kj</button>
            <button className="button" onClick={() => {addProtein(10)}}>Add 10 Protein</button>
            <button className="button" onClick={() => {addFats(10)}}>Add 10 Fats</button>
            <button className="button" onClick={() => {addCarbs(10)}}>Add 10 Carbs</button>
            {/* <button className="button" onClick={() => {(500)}}>Add mock food item</button> */}
        </main>
    )
}

export default DailyTracker 