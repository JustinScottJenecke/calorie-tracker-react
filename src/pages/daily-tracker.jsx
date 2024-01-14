import TrackerDisplay from "../components/daily-tracker/tracker-display";
import TrackedFoodItemList from "../components/daily-tracker/tracked-food-item-list";
import FoodItem from "../components/food-item";
import TrackingFoodItemsProcess from "../components/process/tracking-food-items-process";
import styles from "./css/daily-tracker.module.css"

import { calcEnergyAndMacrosByServing } from "../functions/daily-tracker";
import { useState, useEffect } from "react";
import { useRef } from "react";

const DailyTracker = () => {

    // ========= State Variables ========

    // styling
    const [processActive, setProcessActive] = useState(false)

    // Tracker State
    const [dailyEnergy, setEnergy] = useState(0)
    const [dailyProtein, setProtein] = useState(0)
    const [dailyFats, setFats] = useState(0)
    const [dailyCarbs, setCarbs] = useState(0)

    // Food Repostory and Tracked Items State
    const [foodRepository, setFoodRepository] = useState([])
    const [trackedFoodItems, setFoodItems] = useState([])

    // Processes
    const [trackingFoodItemsProcess, setTrackingFoodItemsProcess] = useState(false)

    useEffect(() => {
        fetch('src/data/food-items.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
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
     * @returns {null} null
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
                
                selectedFood = foodItem

                // helper functions
                const calculatedFoodItem = calcEnergyAndMacrosByServing(selectedFood, selectedServing)
                updateTrackerDisplay(calculatedFoodItem) 

                // set Id and append selectedFood to array in state
                calculatedFoodItem.id = trackedFoodItems.length
                setFoodItems([...trackedFoodItems, calculatedFoodItem])

                return true

            } else 
                return false
        });
    }

    /**
     * Sets processActive state to false to unfreeze scrolling on daily-tracker.jsx
     * sets setTrackingFoodItemsProcess to false to close trackingFoodItems process modal
     * Uses 2 setter functions
     * - setProcessActive()
     * - setTrackingFoodItemsProcess()
     */
    const stopTrackFoodItemsProcesss = () => {
        setProcessActive(false)
        setTrackingFoodItemsProcess(false)
    }

    // =================================== Template ====================================

    return (
        <main className={processActive ? 'frozen-page' : 'scrollable-page'}>
            <h2 className="title">Daily View</h2>
            <TrackerDisplay dailyEnergy={dailyEnergy} dailyProtein={dailyProtein} dailyFats={dailyFats} dailyCarbs={dailyCarbs} />
            <hr />
            <div className="has-text-centered">
                <button 
                    className="button is-primary" 
                    onClick={ () => { 
                        setTrackingFoodItemsProcess(true) 
                        setProcessActive(!processActive)}
                    }
                >
                    Add Food Item
                </button>
            </div>
            <hr />
            { 
                trackingFoodItemsProcess 
                 && 
                <TrackingFoodItemsProcess 
                    setTrackingFoodItemsProcess={setTrackingFoodItemsProcess} 
                    foodRepository={foodRepository}
                    trackFoodItem={trackFoodItem}
                    stopTrackFoodItemsProcesss={stopTrackFoodItemsProcesss}
                />
            }
            <section className="columns">
                <aside className="column is-6">
                    <h3 className="subtitle">Food Item Repository:</h3>
                    {
                        foodRepository.map(foodItem => {
                            return (
                                <FoodItem 
                                    key={foodItem.id} 
                                    useCase="repository"
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