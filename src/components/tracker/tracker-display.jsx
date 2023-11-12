import { useState } from "react"

const TrackerDisplay = (props) => {

    // default unit is kj
    const energy = 0

    const [dailyProtein, setDailyProtein] = useState(props.dailyProtein)

    const macroNutrients = {
        protein: 0,
        fats: 0,
        carbohydrates: 0
    }

    return (
        <header>

            <section>
                <h2 className="subtitle">
                    Energy and Macronutrients
                </h2>
            </section>

            <section className="columns">
                <div className="column is-4 is-flex-direction-column">
                    <div>Total</div>
                    <div>0</div>
                </div>
                <div className="column is-8">
                    <ul className="columns">
                        <div className="column is-flex-direction-column">
                            <div>Protein</div>
                            <div>{dailyProtein}</div>
                        </div>
                        <div className="column is-flex-direction-column">
                            <div>Fats</div>
                            <div>0</div>
                        </div>
                        <div className="column is-flex-direction-column">
                            <div>Carbohydrates</div>
                            <div>0</div>
                        </div>
                    </ul>
                </div>
            </section>

        </header>
    )
}

export default TrackerDisplay 