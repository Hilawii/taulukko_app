import React from "react";
import './App.css';

const App = () => {
  return(
    <div className = "app-container">
      <table>
        <thead>
          <tr>
            <th> First name </th>
            <th> Last name</th>
            <th> Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Ville </td>
            <td> Herajärvi </td>
            <td> 28 </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}




export default App;
