import FoodItem from "./food-item/"

/**
 * Component to display the unmodified/untracked food items stored inside of the applications
 * main datastore. Displays a list of FoodItem components with more details than what is displayed 
 * the daily tracker view
 * @param {object} props 
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
                className="button" 
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