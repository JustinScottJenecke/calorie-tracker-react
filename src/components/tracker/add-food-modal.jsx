import { useState } from 'react'

import styles from './add-food-modal.module.css'

/**
 * Gives the user the option to select food items from Food repository or create a custom
 * food item on the fly.
 * Users have the option to persist any newly created food items to the repository on their 
 * personalized repository.
 * 
 * @param {function} setAddFodModalOptions - function from parent component changes the state of this component to show and hide this component
 * @param {function} setCreateNewFoodModal - modifies state of process component by hiding or showing CreateNewModal component
 * @param {function} setCreateNewFoodModal - modifies state of process component by hiding or showing CreateNewModal component
 * @param {object} props
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
                        className={`button is-primary column ${styles['afm-button-option']}`}
                        onClick={ () => {
                            props.setAddFodModalOptions(false)
                            props.setCreateNewFoodModal(true)
                        }}
                    >
                        Enter new custom food item
                    </button>
                </div>
                <div className="columns">
                    <button className={`button is-primary column ${styles['afm-button-option']}`}>
                        Select food item from manifest
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddFoodModal 