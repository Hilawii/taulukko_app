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
      <h1> Taulu lisätyistä henkilöistä </h1>
      <Taulu ihmiset={henkilo} />
      <Lisays ihmiset={henkilo} setIhmiset={setHenkilo}/>

   
    </div>
  )
}


export default App;
