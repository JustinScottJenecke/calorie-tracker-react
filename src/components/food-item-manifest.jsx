import FoodItem from "./food-item/"
import styles from './css/food-item-manifest.module.css'
import FoodManifestHeader from './food-item-manifest/food-manifest-header'

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
            <ul className={`columns is-multiline px-5`}>
            {
                props.foodRepository.map(foodItem => {
                    return (
                        <li className="column is-6">
                            <FoodItem
                                key={foodItem.id}
                                useCase="repository"
                                foodItem={foodItem}
                            // addBtnHandler={trackFoodItem}
                            />
                        </li>
                    )
                })
            }
            </ul>
            <div>
                <button 
                    className="button is-danger" 
                    onClick={() => {
                        props.setFoodItemManifestModal(false)
                        props.setAddFodModalOptions(true)
                    }}
                >
                    Cancel
                </button>
            </div>

        </section>
    )
}

export default FoodItemManifest 