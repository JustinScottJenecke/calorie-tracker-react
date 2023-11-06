import TrackerDisplay from "../components/tracker/tracker-display";
import TrackerFoodItemList from "../components/tracker/tracker-food-item-list";
import AddFoodModal from "../components/tracker/add-food-modal";

const DailyTracker = () => {

    const createFood = (name, energy, weight, protein, fats, carbs) => {
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


    const dummy = {
        protein: 0,
        fats: 0,
        carbs: 0
    }

    return (
        <main>
            <h2 className="title">Daily View</h2>
            <TrackerDisplay/>
            <hr />
            <TrackerFoodItemList />
            <hr />
            <AddFoodModal />
        </main>
    )
}

export default DailyTracker 