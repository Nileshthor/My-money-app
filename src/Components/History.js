import React from 'react'

export default function History()
{
    const records = [
        {
            id:1, date:"22/06/2024", amount:1000, sender:'Nilesh', receiver:'niraj', status:'success'
        },
        {
            id:2, date:"22/06/2024", amount:1000, sender:'Nilesh', receiver:'niraj', status:'success'
        },
        {
            id:3, date:"22/06/2024", amount:1000, sender:'Nilesh', receiver:'niraj', status:'success'
        },
        {
            id:2, date:"22/06/2024", amount:1000, sender:'Nilesh', receiver:'niraj', status:'success'
        },
        {
            id:3, date:"22/06/2024", amount:1000, sender:'Nilesh', receiver:'niraj', status:'success'
        }
    ]

    return(
        <div>
            History
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                 records.map(e => {
                    return(
                        <tr>
                            <td>{e.date}</td>
                            <td>{e.amount}</td>
                            <td>{e.sender}</td>
                            <td>{e.receiver}</td>
                            <td>{e.status}</td>
                        </tr>
                    )
                 })
             }
                </tbody>
            </table>
        </div>
    )

}