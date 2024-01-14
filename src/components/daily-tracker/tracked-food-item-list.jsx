import FoodItem from "../food-item"

const TrackedFoodItemList = (props) => {

    const mockItems = [1, 2, 3, 4, 5]
    const trackedFoodItems = props.trackedFoodItems


    return (
        <div>
            <h3 className="subtitle">Tracked Food Items:</h3> 
            <ul>
                {
                    trackedFoodItems.map(foodItem => {
                        return (
                            <li key={foodItem.id} >
                                <FoodItem foodItem={foodItem}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TrackedFoodItemList 