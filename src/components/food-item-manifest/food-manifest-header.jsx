import styles from '../css/food-item-manifest.module.css'

const FoodManifestHeader = (props) => {
    return(
        <header className={`is-flex is-justify-content-flex-end`}>
            <div>
                <button className="button is-info m-1" disabled>Sort & Filter</button>
            </div>
            <div>
                <button className="button is-danger m-1" onClick={ () => {props.closeManifest()}}>Cancel</button>
            </div>
        </header>
    )
}

export default FoodManifestHeader