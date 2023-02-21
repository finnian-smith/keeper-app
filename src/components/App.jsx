import React from "react";
import { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes((previousNotes) => {
            return [...previousNotes, note];
        });
    }

    function deleteNote(id) {
       setNotes((previousNotes) => {
        return previousNotes.filter((note, index) => {
            return index !== id;
        });
       });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;