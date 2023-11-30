import styles from './add-food-modal.module.css'

const AddFoodModal = () => {

    return (
        <div className={styles['popup-modal']}>
            <button className={`button is-dark ${styles['cancel-btn']}`}>
                X
            </button>
            <div action="" method="get" className="is-flex-direction-column">
                <div className="columns">
                    <button className={`button is-primary column ${styles['afm-button-option']}`}>
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