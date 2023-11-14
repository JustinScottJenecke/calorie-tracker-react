import { energyAndMacroConverter } from "../../functions/daily-tracker";


const TEST = () => {

    const mockObjectGrams = {
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
    }

    const mockObjectLitres = {
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
    }

    const mockObjectWhole = {
            "id": 2,
            "name": "Egg (whole)",
            "energy":320,
            "unit": "1-whole",
            "category": "egg",
            "serving": "1",
            "macros": {
                "protein": 6.3,
                "fats": 5,
                "carbohydrates": 0.4
            }
    }



    energyAndMacroConverter(mockObjectWhole)

    return (
        <>
            <p>
                Test
            </p>
        </>
    )

}

export default TEST