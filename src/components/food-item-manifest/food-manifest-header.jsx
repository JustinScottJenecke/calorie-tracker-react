import styles from '../css/food-item-manifest.module.css'

const FoodManifestHeader = () => {
    return(
        <header className={`is-flex is-justify-content-flex-end`}>
            <div>
                <button className="button is-info m-1">Sort & Filter</button>
            </div>
            <div>
                <button className="button is-danger m-1">Cancel</button>
            </div>
        </header>
    )
}

export default FoodManifestHeader