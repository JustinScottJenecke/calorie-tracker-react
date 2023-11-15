import { useState } from "react"

const FoodItem = (props) => {

    // extract serving unit from food item
    const foodItem = props.foodItem
    const [servingSize, servingUnit] = foodItem.unit.split("-")

    // hooks
    const [servingSizeState, setServingSizeState] = useState(servingSize)

    return (
        <li>
            {foodItem.id}
            - {foodItem.name}
            - <input type="number" value={servingSizeState} onChange={(e) => {setServingSizeState(e.target.value)}} /> {servingUnit}
            - <button onClick={() => { props.addBtnHandler(foodItem.id, servingSizeState) }}>Add</button>
        </li>
    )
}

export default FoodItem 