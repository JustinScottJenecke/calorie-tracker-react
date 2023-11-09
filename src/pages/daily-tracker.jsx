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
    const [dailyFoodItems, updateFoodItems] = useState([])

    const createFoodFactory = (name, energy, weight, protein, fats, carbs) => {
        return {
            // getName() {return name},
            // getEnergy() {return energy},
            // getWeight() {return weight},
            // getProtein() {return protein},
            // getFats() {return fats},
            // getCarbs() {return carbs}
            name: name,
            energy: energy,
            weight: weight,
            macros: {
                protein: protein,
                fats: fats,
                carbs: carbs
            }
        }
    }

    const addItem = (energy) => {
        updateEnergy(dailyEnergy + energy)
    }

    return (
        <main>
            <h2 className="title">Daily View</h2>
            <TrackerDisplay/>
            {dailyEnergy}
            <hr />
            <TrackerFoodItemList />
            <hr />
            <AddFoodModal />
            <button className="button" onClick={() => {addItem(500)}}>Add 100 kj</button>
        </main>
    )
}

export default DailyTracker 