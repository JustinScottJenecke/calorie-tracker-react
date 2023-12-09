const CreateNewFoodModal = () => {

    return (
        <section>
            <form>
                <input className={`field input`} type="text" placeholder="Food item name here.." />

                {/* if once off serving */}
                <input className={`field input`} type="text" placeholder="Kj of serving" />
                <input className={`field input`} type="text" placeholder="Weight of serving (if obtainable)" />

                {/* if adding new item */}
                <input className={`field input`} type="text" placeholder="Kj of serving" />
                <input className={`field input`} type="text" placeholder="Unit" />
                <input className={`field input`} type="text" placeholder="Amount" />
                {/* <input className={`field input`} type="text" placeholder="Kj of serving" /> */}

                {/* Always applicable */}
                <div class="field is-grouped">
                    <div class="control">
                        <input className={`input`} type="name" placeholder="Protein" />
                    </div>
                    <div class="control">
                        <input className={`input`} type="name" placeholder="Fats" />
                    </div>
                    <div class="control">
                        <input className={`input`} type="name" placeholder="Carbs" />
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-success">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-danger">Cancel</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CreateNewFoodModal 