import TrackerDisplay from "../components/tracker/tracker-display";
import TrackedFoodItemList from "../components/tracker/tracked-food-item-list";
import AddFoodModal from "../components/tracker/add-food-modal";

import { calcEnergyAndMacrosByServing } from "../functions/daily-tracker";
import { useState, useEffect } from "react";
import FoodItem from "../components/food-item";

const DailyTracker = () => {

    // ========= State Variables ========
    const [dailyEnergy, setEnergy] = useState(0)
    const [dailyProtein, setProtein] = useState(0)
    const [dailyFats, setFats] = useState(0)
    const [dailyCarbs, setCarbs] = useState(0)

    const [foodRepository, setFoodRepository] = useState([])
    const [trackedFoodItems, setFoodItems] = useState([])

    useEffect(() => {
        fetch('src/data/food-items.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => setFoodRepository(data))
    }, [])

    // ========= Business Logic =========

    // State updators
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
        setProtein(prev => prev + protein)
    }

    /**
     * Updates the tracked energy and macro-nutrient values inside the state of page/component
     * @param {Object} foodItem FoodItemObject: {id, name, energy, unit, category, serving, macros}
     * @returns {null}
     */
    const updateTrackerDisplay = (foodItem) => {

        // adds macros and energy of food item
        addEnergy(foodItem.energy)
        addProtein(foodItem.macros.protein)
        addFats(foodItem.macros.fats)
        addCarbs(foodItem.macros.carbohydrates)
    }

    /**
     * Adds a selected FoodItem to a list of tracked FoodItems and calculates the energy and 
     * macro-nutrients of food selected by means of a calculation
     * 
     * @param {number} selectedId Id of FoodItem to be added to tracked food item list
     * @param {number} selectedServing serving size selected by user to be used in calculation/helper function
     * @returns {boolean} retruns true if adding is successful, false if add fails
     */
    const trackFoodItem = (selectedId, selectedServing) => {

        let selectedFood;

        foodRepository.forEach(foodItem => {
            if (foodItem.id === selectedId) {
                //selectedFood = foodItem

                const {name, energy, unit, category, serving, macros} = foodItem

                selectedFood = {
                    name: name,
                    energy: energy,
                    unit: unit,
                    category: category,
                    serving: serving,
                    macros: macros
                }
            }
        });

        if (selectedFood) {

            // helper functions
            calcEnergyAndMacrosByServing(selectedFood, selectedServing)
            updateTrackerDisplay(selectedFood) 

            // set Id and append selectedFood to array in state
            selectedFood.id = trackedFoodItems.length
            setFoodItems([...trackedFoodItems, selectedFood])

            return true
        } else 
            return false
    }

    const mockFoodItem = {
        name: "Sweet Potato",
        energy: 360,
        unit: "100-grams",
        category: "starch",
        serving: "30-grams",
        macros: {
            protein: 1.6,
            fats: 0.2,
            carbohydrates: 20
        }
    }

    return (
        <main>
            <h2 className="title">Daily View</h2>
            <TrackerDisplay dailyEnergy={dailyEnergy} dailyProtein={dailyProtein} dailyFats={dailyFats} dailyCarbs={dailyCarbs} />
            <hr />
            <section className="columns">
                <aside className="column is-6">
                    <h3 className="subtitle">Food Item Repository:</h3>
                    {
                        foodRepository.map(foodItem => {
                            return (
                                <FoodItem 
                                    key={foodItem.id} 
                                    foodItem={foodItem}
                                    addBtnHandler={trackFoodItem}
                                />
                            )
                        })
                    }
                </aside>
                <aside className="column is-6">
                    <TrackedFoodItemList trackedFoodItems={trackedFoodItems} />
                </aside>
            </section>
            <hr />
            {/* <AddFoodModal /> */}
            {/* <button className="button" onClick={() => { addFoodFromRepo(1) }}>Add Food</button> */}
            <button className="button" onClick={() => { addEnergy(100) }}>Add 100 kj</button>
            <button className="button" onClick={() => { addProtein(10) }}>Add 10 Protein</button>
            <button className="button" onClick={() => { addFats(10) }}>Add 10 Fats</button>
            <button className="button" onClick={() => { addCarbs(10) }}>Add 10 Carbs</button>
            {/* <button className="button" onClick={() => {(500)}}>Add mock food item</button> */}
        </main>
    )
}

export default DailyTracker 