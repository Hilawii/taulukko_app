import { table } from "console";
import { stringify } from "querystring";
import React, { FC, useState } from "react";
import "./App.css";
import Taulu from "./Komponentit/taulu";




const App = () => {
  

  interface Tila{
    ihmiset:{
      etunimi: string
      sukunimi: string
      ika: number
    }[]
  }

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

   
    </div>
  )
}




export default App;
