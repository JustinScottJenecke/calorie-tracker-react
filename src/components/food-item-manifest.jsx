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
    // console.log(props.foodRepository)

    const closeManifest = () => {
        props.setFoodItemManifestModal(false)
        props.setAddFodModalOptions(true)
    } 

    return (
        <section>
            <FoodManifestHeader closeManifest={closeManifest}/>
            <ul className={`columns is-multiline px-5`}>
            {
                props.foodRepository.map(foodItem => {
                    return (
                        <li className="column is-6" key={foodItem.id}>
                            <FoodItem
                                useCase="repository"
                                foodItem={foodItem}
                                addBtnHandler={props.trackFoodItem}
                            />
                        </li>
                    )
                })
            }
            </ul>
        </section>
    )
}

export default FoodItemManifest 