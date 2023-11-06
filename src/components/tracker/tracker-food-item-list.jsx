const TrackerFoodItemList = () => {

    const mockItems = [1, 2, 3, 4, 5]

    return (
        <div>
            Added Food Items
            <ul>
                {
                    mockItems.map( (foodItem) => {
                        return <li className="list">{foodItem}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TrackerFoodItemList 