import { useState } from "react"

/**
 * Description - FoodItem universal component for displaying food items in app. 
 * 
 * Can be used in the following contexts:
 *  - FoodRepositoryList
 *  - TrackedFoodItems
 * 
 * @param {Object} props 
 * @param {Object} props.foodItem - FoodItem object to be displayed. 
 * @param {("repository"|"tracker"|"management")} props.useCase - Determines which context component is being used and affects how template is conditionally rendered
* @param {Function} props.addBtnHandler - Function passed down from parent to add FoodItem to TrackedFoodItems
 * @returns 
 */
const FoodItem = (props) => {

    //====== Business Logic and Variables ======

    const useCase = props.useCase
    const foodItem = props.foodItem
    const [servingSize, servingUnit] = foodItem.unit.split("-")

    // templates
    const addBtn = <button className="button is-success mt-2" onClick={() => { props.addBtnHandler(foodItem.id, servingSizeState) }}>Add</button>

    // hooks
    const [servingSizeState, setServingSizeState] = useState(servingSize)

    //====== Template ======

    return (
        <div className="box">
            <ul>
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
                {useCase === 'repository' ? addBtn : ''}
            </div>
        </div>
    )
}

export default FoodItem 