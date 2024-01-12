import styles from '../css/food-item-manifest.module.css'

const FoodManifestHeader = () => {
    return(
        <header className={`${styles['header']}`}>
            <input type="text" placeholder="sort" />
            <input type="text" placeholder="filter" />
            <button className="button is-danger">Cancel</button>
        </header>
    )
}

export default FoodManifestHeader