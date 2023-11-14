import { energyAndMacroConverter } from "../../functions/daily-tracker";


const TEST = () => {

    const mockObject = {
        "name": "Ground Beef",
        "energy": 850,
        "unit": "100-grams",
        "category": "meat",
        "serving": "",
        "macros": {
            "protein": 18.2,
            "fats": 14.1,
            "carbohydrates": 1
        },
        "id": 0
    }

    energyAndMacroConverter(mockObject, 75)

    return (
        <>
            <p>
                Test
            </p>
        </>
    )

}

export default TEST