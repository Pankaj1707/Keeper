import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import { useTheme } from "@material-ui/core";



function CreateArea(props) {

    const [isExtend, setIsExtended] = useState(false)
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInputText(preValue => {
            return { ...preValue, [name]: value }
        })


    }
    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(inputText);
        setInputText({
            title: "",
            content: ""
        });
    }
    function handleClick() {
        setIsExtended(true);
    }




    return (
        <div>
            <form className="create-note">
                {isExtend && <input value={inputText.title} onChange={handleChange} name="title" placeholder="Title" />}
                <textarea
                    onClick={handleClick}
                    value={inputText.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExtend ? "3" : "1"} />
                <Zoom in={isExtend}>
                    <Fab onClick={handleSubmit}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
