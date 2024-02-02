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
    const addBtn = (
        <button
            className="button is-success mt-2 px-5"
            onClick={() => { props.addBtnHandler(foodItem.id, servingSizeState) }}>
            Add
        </button>
    )

    // hooks
    const [servingSizeState, setServingSizeState] = useState(servingSize)

    //====== Template ======

    return (
        <div className="box is-flex-direction-column">
            <ul>
                <li className="subtitle has-text-centered">{foodItem.name}</li>
                <li>Details:</li>
                <ul>
                    <li>Energy: {foodItem.energy}kj per {foodItem.unit}</li>
                    <li>Category: {foodItem.category}</li>
                </ul>
                <li className="mt-4">Macros:</li>
                <ul className="columns">
                    <li className="column is-flex-direction-column">
                        <div className="has-text-centered">Protein:</div>
                        <div className="has-text-centered">{foodItem.macros.protein.toFixed(2)}g</div>
                    </li>
                    <li className="column is-flex-direction-column is-align-items-center">
                        <div className="has-text-centered">Fats:</div>
                        <div className="has-text-centered">{foodItem.macros.fats.toFixed(2)}g</div>
                    </li>
                    <li className="column is-flex-direction-column is-align-items-center">
                        <div className="has-text-centered">Carbohydrates:</div>
                        <div className="has-text-centered">{foodItem.macros.carbohydrates.toFixed(2)}g</div>
                    </li>
                </ul>
            </ul>
            <div className="mt-4">
                {useCase === 'repository' &&
                    <div>
                        <div>Serving Size:</div>
                        <div className="has-text-centered">
                            <input className="has-text-centered" type="number" value={servingSizeState} onChange={(e) => { setServingSizeState(e.target.value) }} /> {servingUnit}
                        </div>
                    </div>
                }

                <br />
                <div className="has-text-centered">
                    {useCase === 'repository' && addBtn}
                </div>

            </div>
        </div>
    )
}

export default FoodItem 