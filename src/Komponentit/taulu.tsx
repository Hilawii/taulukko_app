import React from "react";


interface Props{
    ihmiset:{
      etunimi: string
      sukunimi: string
      ika: number
    }[]
  }

const Taulu: React.FC<Props> = ({ihmiset}) => {


    const renderTaulu = (): JSX.Element[] =>{
        return ihmiset.map((ihmiset) => {
            return(
            <div className = "Taulu">
                <table className="Taulu">
                <thead>
                  <tr>
                    <th>Etunimi  </th>
                    <th>Sukunimi </th>
                    <th>Ikä </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{ihmiset.etunimi} </td>
                    <td>{ihmiset.sukunimi} </td>
                    <td>{ihmiset.ika}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            )

        })

    }

    return(
        <div>
            {renderTaulu()}
        </div>
    )

}

export default Taulu