import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";






function App() {

    const [entry, setEntry] = useState([]);


    function handleSubmit(inputText) {

        setEntry(preValue => {
            return [...preValue, inputText]
        })
    }


    function handleDelete(id) {

        setEntry(preValue => {
            return preValue.filter((x, y) => {
                return y !== id;
            })
        })
    }


    return <div>
        <Header />
        <CreateArea
            handleSubmit={handleSubmit}
        />
        {entry.map((x, y) => {
            return <Note
                key={y}
                id={y}
                title={x.title}
                content={x.content}
                handleDelete={handleDelete}
            />
        })}
        <Footer />
    </div>
}

export default App;