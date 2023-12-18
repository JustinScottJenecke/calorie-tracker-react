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
                <h2 className="subtitle">
                    Energy and Macronutrients
                </h2>
            </section>
            <hr></hr>
            <section className="columns">
                <div className="column is-4 is-flex-direction-column">
                    <div>Total</div>
                    <div>{energy} {energyUnit}</div>
                </div>
                <div className="column is-8">
                    <ul className="columns">
                        <div className="column is-flex-direction-column">
                            <div>Protein</div>
                            <div>{macroNutrients.protein.toFixed(2)}g</div>
                        </div>
                        <div className="column is-flex-direction-column">
                            <div>Fats</div>
                            <div>{macroNutrients.fats.toFixed(2)}g</div>
                        </div>
                        <div className="column is-flex-direction-column">
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