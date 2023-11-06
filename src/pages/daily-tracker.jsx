import TrackerDisplay from "../components/tracker/tracker-display";
import TrackerFoodItemList from "../components/tracker/tracker-food-item-list";
import AddFoodModal from "../components/tracker/add-food-modal";

const DailyTracker = () => {

    return (
        <main>
            <h2>Daily View</h2>
            <TrackerDisplay />
            <TrackerFoodItemList />
            <AddFoodModal />
        </main>
    )
}

export default DailyTracker 