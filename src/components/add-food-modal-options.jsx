import { useState } from 'react'

import styles from './css/add-food-modal-options.module.css'
import utilStyles from './css/ui/cancel-btn.module.css'

/**
 * Gives the user the option to select food items from Food repository or create a custom
 * food item on the fly.
 * Users have the option to persist any newly created food items to the repository on their 
 * personalized repository.
 * 
 * @param {function} setAddFodModalOptions - function from parent component changes the state of this component to show and hide this component
 * @param {function} setCreateNewFoodModal - modifies state of process component by hiding or showing CreateNewModal component
 * @param {function} setFoodItemManifestModal - modifies state of process component by hiding or showing CreateNewModal component
 * @param {object} props
 * 
 * @returns {JSX}
 */
const AddFoodModal = (props) => {

    return (
        <section>
            <div className='middle-align-wrapper'>
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
                        <button 
                            className={`button is-primary column ${styles['afm-button-option']}`}
                            onClick={ () => {
                                props.setAddFodModalOptions(false)
                                props.setFoodItemManifestModal(true)
                            }}
                        >
                            Select food item from manifest
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddFoodModal 