import FoodItemManifest from "../food-item-management/food-item-manifest"
import CreateNewFoodModal from "../food-item/create-new-food-modal"
import AddFoodModal from "../tracker/add-food-modal"

/**
 * Process component serves as a controller for component cycling when a user is
 * attempting to add a food item to the list of tracked food items. Is able to track state
 * of which component needs to be displayed/
 * @returns {JSX}
 */
const TrackingFoodItemsProcess = () => {

    return (
        <section className={`popup-modal is-flex-direction-column `}>
            processes go here
            <AddFoodModal />
            <CreateNewFoodModal />
            <FoodItemManifest />
        </section>
    )
}

export default TrackingFoodItemsProcess