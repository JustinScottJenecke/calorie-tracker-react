/**
 * About: Util functions for business logic of the daily tracker domain
 */


/**
 * 
 */
export const createFoodFactory = (name, energy, weight, protein, fats, carbs) => {
    return {
        // getName() {return name},
        // getEnergy() {return energy},
        // getWeight() {return weight},
        // getProtein() {return protein},
        // getFats() {return fats},
        // getCarbs() {return carbs}
        name: name,
        energy: energy,
        weight: weight,
        macros: {
            protein: protein,
            fats: fats,
            carbs: carbs
        }
    }
}


/**
 * Name: helperEnergyMacroCalculation
 * helper function to abstract calculating value of kj/macro based on serving size
 * 
 * @param {number} value the energy or macronutrient to be converted (energy, protein, etc.)
 * @param {number} servingSize base serving unit of food (100g, 100ml, etc.)
 * @param {number} servingInput serving input from user
 * 
 * @returns {number} energy or grams of nutrients for the serving size selected by user
 */
 export const helperEnergyMacroCalculation = (value, servingSize, servingInput) => {
    value = value / servingSize * servingInput

    return value
 }


/**
 * Name: energyMacroServingConverter
 * modifies macros and energy of food based on serving size selected by user
 * @param {object} foodItem food item object selected by user
 * @param {number} servingInput serving size desired by user (in grams/litre/whole)
 * @return {object} returns a new food item with new energy and macro info based on the serving size selected by user
 */
export const calcEnergyAndMacrosByServing = (foodItem, servingInput) => {

    // extract properties from food item
    let {energy, unit, serving, macros} = foodItem

    // test to see if destructures correctly
    // console.log(energy, unit, serving, macros)

    if (servingInput) {
        
        // extract unit of measurement from foodItem's unit property
        const [servingSize, servingUnit] = unit.split("-")

        // test to print out energy before conversion:
        //console.log(`${unit} of ${foodItem.name} has: - ${energy} kj \n- Protein: ${macros.protein}g \n- Fats: ${macros.fats}g \n- Carbs: ${macros.carbohydrates}g`)

        // calc energy and macros based of user's serving input
        foodItem.energy = helperEnergyMacroCalculation(energy, servingSize, servingInput)
        foodItem.macros.protein = helperEnergyMacroCalculation(macros.protein, servingSize, servingInput)
        foodItem.macros.fats = helperEnergyMacroCalculation(macros.fats, servingSize, servingInput)
        foodItem.macros.carbohydrates = helperEnergyMacroCalculation(macros.carbohydrates, servingSize, servingInput)

        // replace old serving size with new serving size
        foodItem.unit =  `${servingInput}-${servingUnit}`

        return foodItem
        
    } else {
        return foodItem
    }
}