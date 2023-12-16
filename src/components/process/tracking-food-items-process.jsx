import { useState } from "react"
import FoodItemManifest from "../food-item-management/food-item-manifest"
import CreateNewFoodModal from "../food-item/create-new-food-modal"
import AddFoodModal from "../tracker/add-food-modal"

/**
 * Process component serves as a controller for component cycling when a user is
 * attempting to add a food item to the list of tracked food items. Is able to track state
 * of which component needs to be displayed/
 * 
 * @returns {JSX}
 */
const TrackingFoodItemsProcess = (props) => {

    // component cycling state
    const [showAddFoodModalOptions, setAddFodModalOptions] = useState(true)
    const [showCreateNewFoodModal, setCreateNewFoodModal] = useState(false)
    const [showFoodItemManifestModal, setFoodItemManifestModal] = useState(false)

    return (
        <section className={`popup-modal is-flex-direction-column`}>
            { 
                showAddFoodModalOptions 
                && 
                <AddFoodModal 
                    setAddFodModalOptions={setAddFodModalOptions}
                    setCreateNewFoodModal={setCreateNewFoodModal}
                    setFoodItemManifestModal={setFoodItemManifestModal}
                />
            }
            { 
                showCreateNewFoodModal 
                && 
                <CreateNewFoodModal
                    setAddFodModalOptions={setAddFodModalOptions}
                    setCreateNewFoodModal={setCreateNewFoodModal}
                />
            }
            { 
                showFoodItemManifestModal 
                && 
                <FoodItemManifest foodRepository={props.foodRepository}/>
            }
        </section>
    )
}

export default TrackingFoodItemsProcess