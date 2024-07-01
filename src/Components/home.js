import React from 'react'

export default function Home({balance, setBalance})
{
   
    return (
        <div>
            My Money App Home 
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="login">Navbar</a>
                </div>
            </nav>

            <h1>Balance: {balance}</h1>

            <div>
                <a href='history'>View History</a>
            </div>
            <div>
                <a href='requests'>View Requests</a>
            </div>

            <div>
                <a href='login'>Logout</a>
            </div>

        </div>
    );
}