import { useState } from "react"
import FoodItemManifest from "../food-item-manifest"
import CreateNewFoodModal from "../create-new-food-modal"
import AddFoodModalOptions from "../add-food-modal-options"

/**
 * Process component serves as a controller for component cycling when a user is
 * attempting to add a food item to the list of tracked food items. Is able to track state
 * of which component needs to be displayed
 * 
 * They function very similar to routers and the components that are rendered inside of a process modal 
 * appear as sub-modals
 * 
 * @returns {JSX}
 */
const TrackingFoodItemsProcess = (props) => {

    // component cycling state
    const [showAddFoodModalOptions, setAddFodModalOptions] = useState(true)
    const [showCreateNewFoodModal, setCreateNewFoodModal] = useState(false)
    const [showFoodItemManifestModal, setFoodItemManifestModal] = useState(false)

    // CreateNewFood


    // Food Repository


    return (
        <section className={`popup-modal is-flex-direction-column`}>
            <button 
                className="button is-dark is-align-self-flex-end m-2" 
                onClick={() => {props.stopTrackFoodItemsProcesss()}} 
            >
                X
            </button>
            { 
                showAddFoodModalOptions 
                && 
                <AddFoodModalOptions 
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
                <FoodItemManifest 
                    foodRepository={props.foodRepository}
                    setAddFodModalOptions={setAddFodModalOptions}
                    setFoodItemManifestModal={setFoodItemManifestModal}
                    trackFoodItem={props.trackFoodItem}
                />
            }
        </section>
    )
}

export default TrackingFoodItemsProcess