import React from 'react';
import './Profile.css';
const TableRef = ({referrals}) => {

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th><p>Nombre de tu amigo</p></th>
                        <th><p>Fecha de canje</p></th>
                        <th className="points-ref"><p>Puntos</p></th>
                    </tr>
                </thead>
                <tbody>
                    {referrals.map(ref => 
                        {
                        return(<tr key={ref.id}>
                                <td><p>{ref.name}</p></td>
                                <td><p>{ref.date}</p></td>
                                <td className="points-ref"><p><strong>{ref.points} puntos</strong></p></td>
                            </tr>)
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TableRef;
