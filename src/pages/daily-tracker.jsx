import TrackerDisplay from "../components/tracker/tracker-display";
import TrackerFoodItemList from "../components/tracker/tracker-food-item-list";
import AddFoodModal from "../components/tracker/add-food-modal";

import { useState } from "react";

const DailyTracker = () => {

    const [dailyEnergy, updateEnergy] = useState(0)
    const [dailyMacros, updateMacros] = useState({
        protein: 0,
        fats: 0,
        carbs: 0
    })
    const [dailyFoodItems, updateFoodItems] = useState(['oats', 'chicken', 'broccoli', 'rice'])

    const addItem = (energy) => {
        updateEnergy(dailyEnergy + energy)
    }

    const addProtein = (protein) => {
        updateMacros(dailyMacros.protein + protein)
    }

    const addFats = (fats) => {
        updateEnergy(dailyEnergy + energy)
    }

    const addCarbs = (carbs) => {
        updateEnergy(dailyEnergy + energy)
    }

    const addMockFoodItem = (FoodItem, energy, protein, fats, carbs) => {
        updateEnergy(dailyEnergy + energy)
    }

    return (
        <main>
            <h2 className="title">Daily View</h2>
            <TrackerDisplay/>
        
            {dailyEnergy}
            <hr />
            Daily Protein: {dailyMacros.protein}
            <br />
            Daily Fats: {dailyMacros.protein}
            <br />
            Daily Carbohydrates: {dailyMacros.protein}

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
            <button className="button" onClick={() => {addItem(500)}}>Add 100 kj</button>
            <button className="button" onClick={() => {addProtein(500)}}>Add 10 Protein</button>
            <button className="button" onClick={() => {addFats(500)}}>Add 10 Fats</button>
            <button className="button" onClick={() => {addCarbs(500)}}>Add 10 Carbs</button>
            {/* <button className="button" onClick={() => {(500)}}>Add mock food item</button> */}
        </main>
    )
}

export default DailyTracker 