import { useState } from "react";
import TutorialDataService from "../services/tutorialService";

const AddTutorial = () => {
    console.log('AddTutorial..');
    // const [state, setState] = useState();
    const [titleValue, setTitleValue] = useState('');
    const [descValue, setDescValue] = useState('');

    const handleChangeTitle = (e) => {
        console.log('Title Entered: ', e.target.value);
        setTitleValue(e.target.value);
    };

    const handleChangeDesc = (e) => {
        console.log('Desc Entered: ', e.target.value);
        setDescValue(e.target.value);
    };

    return(
        <>
            <h1>Add Tutorial </h1>
            <form>
                <label>
                    Title:
                    <input
                        type="text"
                        value={titleValue}
                        onChange={handleChangeTitle}
                    />
                </label>

                <label>
                    Description:
                    <input
                        type="text"
                        value={descValue}
                        onChange={handleChangeDesc}
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default AddTutorial;