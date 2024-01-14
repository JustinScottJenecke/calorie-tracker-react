const CreateNewFoodModal = (props) => {

    return (
        <section>
            <h1 className="title has-text-centered has-text-light">Create New Food</h1>
            <form className="middle-align-wrapper">
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
                <div className="field is-grouped">
                    <div className="control">
                        <input className={`input`} type="name" placeholder="Protein" />
                    </div>
                    <div className="control">
                        <input className={`input`} type="name" placeholder="Fats" />
                    </div>
                    <div className="control">
                        <input className={`input`} type="name" placeholder="Carbs" />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-success">Submit</button>
                    </div>
                    <div className="control">
                        <button 
                            className="button is-link is-danger"
                            onClick={ (e) => {
                                e.preventDefault()
                                props.setCreateNewFoodModal(false)
                                props.setAddFodModalOptions(true)
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CreateNewFoodModal 