import { useRef } from "react"

const FoodItem = (props) => {


    const foodItem = props.foodItem
    const [servingSize, servingUnit] = foodItem.unit.split("-")

    return (
        <li>
            {foodItem.id}
            - {foodItem.name}
            - <input type="number" /> {servingUnit}
            - <button onClick={() => { props.addBtnHandler(foodItem.id) }}>Add</button>
        </li>
    )
}

export default FoodItem 