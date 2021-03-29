import { stringify } from 'query-string';
import React from 'react';
import './Profile.css';
const TableRef = ({referrals}) => {

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th className="name-ref">Nombre de tu amigo</th>
                        <th className="date-ref">Fecha de canje</th>
                        <th className="points-ref">Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    {referrals.map(ref => 
                        {
                        return(<tr key={ref.id}>
                                <td className="name-ref">{ref.name}</td>
                                <td className="date-ref">{ref.date}</td>
                                <td className="points-ref"><strong>{ref.points} puntos</strong></td>
                            </tr>)
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TableRef;
