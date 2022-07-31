import React from 'react'
import {  Link } from "react-router-dom";

export const Skills =() => {
return  (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/skills">Skills</Link>
            </nav>
        </>
    );
}