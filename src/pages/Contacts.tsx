import React from 'react'
import {  Link } from "react-router-dom";

export const Contacts =() => {
return  (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/contacts">Contacts</Link>
            </nav>
        </>
    );
}