import { useState } from "react"

const TrackerDisplay = (props) => {

    // ========= state =========

    const [energyUnit, setEnergyUnit] = useState('kj')

    // ========= variables =========

    // default unit is kj
    const energy = props.dailyEnergy

    const macroNutrients = {
        protein: props.dailyProtein,
        fats: props.dailyFats,
        carbohydrates: props.dailyCarbs
    }

    return (
        <header>

            <section>
                <h2 className="subtitle has-text-centered">
                    Energy and Macronutrients
                </h2>
            </section>
            <hr></hr>
            <section className="">
                <div className="is-flex-direction-column p-3 has-text-centered my-2">
                    <div className="subtitle">Total</div>
                    <div className="title">{energy} {energyUnit}</div>
                </div>
                <div className="p-3">
                    <ul className="columns">
                        <div className="column is-flex-direction-column has-text-centered">
                            <div>Protein</div>
                            <div>{macroNutrients.protein.toFixed(2)}g</div>
                        </div>
                        <div className="column is-flex-direction-column has-text-centered">
                            <div>Fats</div>
                            <div>{macroNutrients.fats.toFixed(2)}g</div>
                        </div>
                        <div className="column is-flex-direction-column has-text-centered">
                            <div>Carbohydrates</div>
                            <div>{macroNutrients.carbohydrates.toFixed(2)}g</div>
                        </div>
                    </ul>
                </div>
            </section>

        </header>
    )
}

export default TrackerDisplay 