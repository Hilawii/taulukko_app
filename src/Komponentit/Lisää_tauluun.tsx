import React, { useState } from "react";
import {Tila as Props} from "../App"

interface Props2{
    ihmiset: Props["ihmiset"]
    setIhmiset: React.Dispatch<React.SetStateAction<Props["ihmiset"]>>
}

const Lisays:  React.FC<Props2> = ({ihmiset, setIhmiset}) => {
    
    const [syote, setSyote] = useState({
        Etunimi: "",
        Sukunimi: "",
        Ikä: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSyote({
            ...syote,
            [e.target.name]: e.target.value

        })

    }

    const handleClick = (): void => {
        if(
            !syote.Etunimi ||
            !syote.Sukunimi ||
            !syote.Ikä
        ){
            return;
        }
        
        setIhmiset([
            ...ihmiset,
            {
                etunimi: syote.Etunimi,
                sukunimi: syote.Sukunimi,
                ika: parseInt( syote.Ikä)

            }
        ]);

        setSyote({
            Etunimi: "",
            Sukunimi: "",
            Ikä: ""
        })
          
    }

    
    return(
        <div className="Lisäätauluun">
            <input
                type="text"
                placeholder="Etunimi"
                className="Lisäys-input"
                value={syote.Etunimi}
                onChange={(handleChange)}
                name ="Etunimi"
            />
            <input
                type="text"
                placeholder="Sukunimi"
                className="Lisäys-input"
                value={syote.Sukunimi}
                onChange={handleChange}
                name = "Sukunimi"
            />
            <input
                type="number"
                placeholder="Ikä"
                className="Lisäys-input"
                value={syote.Ikä}
                onChange={handleChange}
                name = "Ikä"
            /> 
            <button 
                className="Lisäys-nappi"
                onClick={handleClick}
            
            >
                Lisää tauluun
                </button>   
        </div>
    )
}


export default Lisays