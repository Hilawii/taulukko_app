import React, { useState } from "react";

const Lisays = () => {
    
    const [syote, setSyote] = useState({
        Etunimi: "",
        Sukunimi: "",
        Ikä: ""
    })


    return(
        <div className="Lisäätauluun">
            <input
                type="text"
                placeholder="Etunimi"
                className="Lisäys-input"
                value={syote.Etunimi}
            />
            <input
                type="text"
                placeholder="Sukunimi"
                className="Lisäys-input"
                value={syote.Sukunimi}
            />
            <input
                type="text"
                placeholder="Ikä"
                className="Lisäys-input"
                value={syote.Ikä}
            />    
        </div>
    )
}


export default Lisays