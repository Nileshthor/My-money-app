import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Requests({balance, setBalance})
{
    const navigate = useNavigate()

    const requests = [
        {id:1, type:'Send',amount:100, requestBy:'Nilesh'},
        {id:2, type:'Send',amount:1000, requestBy:'Niraj'},
        {id:3, type:'Send',amount:10000, requestBy:'Sujit'}
    ]

    function handleApprove(){
        alert('Request approved!')
        setBalance(balance-100)
        navigate('/')
    }

    return(
        <div>
            Requests
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
                 requests.map(e => {
                    return(
                        <tr>
                            <td>{e.type}</td>
                            <td>{e.amount}</td>
                            <td>{e.requestBy}</td>
                            <td>
                                <button onClick={handleApprove} className='btn btn-outline-success'>Approve</button>
                            </td>     
                        </tr>
                    )
                 })
             }
                </tbody>
            </table>
        </div>
    )

}