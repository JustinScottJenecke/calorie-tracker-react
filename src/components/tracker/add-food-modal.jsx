import { useState } from 'react'

import FoodItemManifest from '../food-item-management/food-item-manifest'
import CreateNewFoodModal from '../food-item/create-new-food-modal'

import styles from './add-food-modal.module.css'

/**
 * Gives the user the option to select food items from Food repository or create a custom
 * food item on the fly.
 * Users have the option to persist any newly created food items to the repository on their 
 * personalized repository.
 * 
 * @param {object} props
 * @param {function} setAddFoodModalActive - function from parent component which toggles component based on state
 * 
 * @returns {JSX}
 */
const AddFoodModal = (props) => {

    return (
        <div>
            <button className={`button is-dark ${styles['cancel-btn']}`}>
                X
            </button>
            <div action="" method="get" className="is-flex-direction-column">
                <div className="columns">
                    <button 
                        className={`button is-primary column ${styles['afm-button-option']}`}>
                        Select Food Item from manifest
                    </button>
                </div>
                <div className="columns">
                    <button className={`button is-primary column ${styles['afm-button-option']}`}>
                        Enter new custom Food Item
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddFoodModal 