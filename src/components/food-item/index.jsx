import { useState } from "react"

const FoodItem = (props) => {

    //====== Component State ======

    /**
     * State variable to dictate which template of component should be rendered 
     * @param {("repository"|"tracked"|"management")} 
     */
    const [useCase, setUseCase] = useState('repository') 

    //====== Business Logic and Variables ======

    // extract serving unit from food item
    const foodItem = props.foodItem
    const [servingSize, servingUnit] = foodItem.unit.split("-")

    // hooks
    const [servingSizeState, setServingSizeState] = useState(servingSize)

    //====== Template ======

    return (
        <div className="box">
            <ul>
            <li>ID: {foodItem.id}</li>
            <li className="subtitle has-text-centered">{foodItem.name}</li>
            <li>Details:</li>
            <li>- Energy: {foodItem.energy}kj per {foodItem.unit}</li>
            <li>- Category: {foodItem.category}</li>
            <li className="mt-4">Macros:</li>
                <ul className="columns">
                    <li className="column">- Protein: {foodItem.macros.protein}g</li>
                    <li className="column">- Fats: {foodItem.macros.fats}g</li>
                    <li className="column">- Carbohydrates: {foodItem.macros.carbohydrates}g</li>
                </ul>
            </ul>
            <div className="mt-4">
                <input type="number" value={servingSizeState} onChange={(e) => {setServingSizeState(e.target.value)}} /> {servingUnit}
                <br />
                <button className="button is-success mt-2" onClick={() => { props.addBtnHandler(foodItem.id, servingSizeState) }}>Add</button>
            </div>
        </div>
    )
}

export default FoodItem 