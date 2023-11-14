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
 * Name: calcEnergyAndMacrosHelper
 * helper function to abstract calculating value of kj/macro based on serving size
 * 
 * @param {number} value the energy or macronutrient to be converted (energy, protein, etc.)
 * @param {number} servingSize base serving unit of food (100g, 100ml, etc.)
 * @param {number} servingInput serving input from user
 * 
 * @returns {number} energy or grams of nutrients for the serving size selected by user
 */
 export const calcEnergyAndMacrosHelper = (value, servingSize, servingInput) => {
    value = value / servingSize * servingInput

    return value
 }

/**
 * Name: energyMacroServingConverter
 * modifies macros and energy of food based on serving size selected by user
 * @param {object} foodItem
 * @param {number} servingSize
 */
export const energyAndMacroConverter = (foodItem, servingInput) => {

    // extract properties from food item
    let {energy, unit, serving, macros} = foodItem

    // test to see if destructures correctly
    // console.log(energy, unit, serving, macros)

    if (servingInput) {
        
        // extract unit of measurement from foodItem's unit property
        const [servingSize, servingUnit] = unit.split("-")

        // tests to see what size and unit serving is measured in eg: 100, grams
        //console.log(servingSize, servingUnit)

        // test to print out energy before conversion
        //console.log(unit + " of " + foodItem.name + ' has ' + energy + 'kj')

        // calc energy and macros based of user's serving input
        energy = calcEnergyAndMacrosHelper(energy, servingSize, servingInput)
        macros.protein = calcEnergyAndMacrosHelper(macros.protein, servingSize, servingInput)
        macros.fats = calcEnergyAndMacrosHelper(macros.fats, servingSize, servingInput)
        macros.carbs = calcEnergyAndMacrosHelper(macros.carbs, servingSize, servingInput)

        console.log(`
            ${servingInput} ${servingUnit} of ${foodItem.name} has: 
                - ${energy} kj \n
                - ${macros.protein}g \n
                - ${macros.fats}g \n
                - ${macros.carbs}g
        `)
    }
}