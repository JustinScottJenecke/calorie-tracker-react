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
 * Name: calcEnergyAndMacros
 * calculates energy per serving size for selected item
 * @param {object} foodItem
 * @param {number} servingSize
 */
export const calcEnergyAndMacros = (foodItem, servingSize) => {
    const {energy, unit, serving, macros} = foodItem

    console.log(energy, unit, serving, macros)
}