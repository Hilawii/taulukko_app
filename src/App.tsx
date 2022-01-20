import React, { FC, useState } from "react";
import "./App.css";
import Lisays from "./Komponentit/Lisää_tauluun";
import Taulu from "./Komponentit/taulu";

export interface Tila{
  ihmiset:{
    etunimi: string
    sukunimi: string
    ika: number
  }[]
}



const App = () => {
  

  const [henkilo, setHenkilo] = useState<Tila["ihmiset"]>([
    {
      etunimi: "Ville",
      sukunimi: "Herajärvi",
      ika: 27
    }
])





  return(
    <div className = "App">
      <table> 
        <thead>
          <tr>
              <th>Etunimi  </th>
              <th>Sukunimi </th>
              <th>Ikä </th>
              <th> Poisto</th>
          </tr>
        </thead>
        <Taulu ihmiset={henkilo} />
      </table>
      <Lisays ihmiset={henkilo} setIhmiset={setHenkilo}/>

    </div>
  )
}


export default App;
