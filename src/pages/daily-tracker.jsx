import TrackerDisplay from "../components/tracker/tracker-display";
import TrackerFoodItemList from "../components/tracker/tracker-food-item-list";
import AddFoodModal from "../components/tracker/add-food-modal";

import { useState } from "react";

const DailyTracker = () => {

    // State Variables
    const [dailyEnergy, setEnergy] = useState(0)
    const [dailyMacros, setMacros] = useState({
        protein: 0,
        fats: 0,
        carbs: 0
    })


    const [dailyFoodItems, setFoodItems] = useState(['oats', 'chicken', 'broccoli', 'rice'])

    // Business Logic
    const addItem = (energy) => {
        setEnergy(dailyEnergy + energy)
    }

    const addToMacros = (protein, fats, carbs) => {
        setMacros({
            protein: protein,
            fats: fats,
            carbs: carbs
        })
    }

    // junk code: not reccomended to use individual functions since objects in state should not be mutated
    // and should be updated as a whole
    const addFats = (fats) => {
        setEnergy(dailyEnergy + energy)
    }

    const addCarbs = (carbs) => {
        setEnergy(dailyEnergy + energy)
    }

    const addMockFoodItem = (FoodItem, energy, protein, fats, carbs) => {
        setEnergy(dailyEnergy + energy)
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

            {/* <hr />
            Daily Food: {
                dailyFoodItems.map(foodItem => {
                    return <li key={foodItem}>{foodItem}</li>
                })
            } */}
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