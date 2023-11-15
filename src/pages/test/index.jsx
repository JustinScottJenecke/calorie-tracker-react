import { useState } from "react";
import { calcEnergyAndMacrosByServing } from "../../functions/daily-tracker";

const TEST = () => {

    const mockFood = [
        {
            "id": 0,
            "name": "Ground Beef",
            "energy": 850,
            "unit": "100-grams",
            "category": "meat",
            "serving": "",
            "macros": {
                "protein": 18.2,
                "fats": 14.1,
                "carbohydrates": 1
            }
        },
        {
            "id": 1,
            "name": "Milk",
            "energy": 200,
            "unit": "100-ml",
            "category": "dairy",
            "serving": "",
            "macros": {
                "protein": 10,
                "fats": 2,
                "carbohydrates": 0.1
            }
        },
        {
            "id": 2,
            "name": "Egg (whole)",
            "energy": 320,
            "unit": "1-whole",
            "category": "egg",
            "serving": "1",
            "macros": {
                "protein": 6.3,
                "fats": 5,
                "carbohydrates": 0.4
            }
        }
    ]

    const [testFoodRepo, setTestFoodRepo] = useState(mockFood)
    const [testFoodItems, setTestFoodItems] = useState([])


    return (
        <>
            <p>
                Test
            </p>
            <button onClick={ () => {
                let convertedObject = calcEnergyAndMacrosByServing(testFoodRepo[1], 200)
                
                convertedObject.id = testFoodItems.length

                setTestFoodItems([...testFoodItems,convertedObject])
                }
            }>
                Test Set Food Items
            </button>
            <ul>
                {
                    testFoodItems.map( testFood => {
                        return (
                            <li key={testFood.id}>
                                {testFood.id} -
                                 {testFood.name}
                                {testFood.energy}
                                {testFood.unit}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )

}

export default TEST