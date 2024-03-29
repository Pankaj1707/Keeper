import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';



function Note(props) {

    function handleDelete() {
        props.handleDelete(props.id);
    }




    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>


        <Fab onClick={handleDelete}>
            <DeleteIcon />
        </Fab>


    </div>
}

export default Note;