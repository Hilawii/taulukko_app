import { table } from "console";
import { stringify } from "querystring";
import React, { FC, useState } from "react";
import "./App.css";
import Taulu from "./Komponentit/taulu";
import taulu from "./Komponentit/taulu";



const App = () => {

  interface State{
    ihmiset:{
      etunimi: string
      sukunimi: string
      age: number
    }[]
  }

  const [henkilo, setHenkilo] = useState<State["ihmiset"]>([])




  return(
    <div className = "App">
      <h1> Testi </h1>
      <Taulu />

   
    </div>
  )
}




export default App;
