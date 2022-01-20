import React from "react";
import {Tila as Props} from "../App"


const Taulu: React.FC<Props> = ({ihmiset}) => {



  const renderTaulu = (): JSX.Element[] =>{
      return ihmiset.map((ihmiset) => {
          return(
                <tr className = "Taulun_rivi">
                  <td>{ihmiset.etunimi}</td>
                  <td>{ihmiset.sukunimi} </td>
                  <td>{ihmiset.ika}</td>
                  <td></td>
                </tr>

                )
       })

    }
    return(
        <tbody>
            {renderTaulu()}
        </tbody>
    )

}

export default Taulu