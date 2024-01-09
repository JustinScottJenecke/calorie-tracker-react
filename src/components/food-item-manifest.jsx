import FoodItem from "./food-item/"

/**
 * Component to display the unmodified/untracked food items stored inside of the applications
 * main datastore. Displays a list of FoodItem components with more details than what is displayed 
 * the daily tracker view
 * 
 * @param {object} props
 * @param {Array <object>} props.foodRepository Contains a list of all FoodItems to be displayed so that users may select the FoodItems they wish to add to the tracker
 * @param {function} props.setFoodItemManifestModal callback to change state and unmount this component
 * @param {function} props.setAddFodModalOptions callback to change state and remount AddFoodModalOptions
 * @returns {JSX}
 */
const FoodItemManifest = (props) => {

    // const foodRepository = props.foodRepository
    console.log(props.foodRepository)

    return (
        <section>
            <h3 className="subtitle">Food Item Repository:</h3>

            {
                props.foodRepository.map(foodItem => {
                    return (
                        <FoodItem
                            key={foodItem.id}
                            useCase="repository"
                            foodItem={foodItem}
                        // addBtnHandler={trackFoodItem}
                        />
                    )
                })
            }

            <button 
                className="button is-danger" 
                onClick={() => {
                    props.setFoodItemManifestModal(false)
                    props.setAddFodModalOptions(true)
                }}
            >
                Cancel
            </button>
        </section>
    )
}

export default FoodItemManifest 