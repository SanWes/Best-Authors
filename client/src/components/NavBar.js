import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {


    return (
    <div> 

        <h1 className="text-center">This is The Best Collection of Authors</h1>

        
        <p className="text-center">
        <Link className="btn btn-success m-3" to="/" >Home</Link>
        <Link className="btn btn-info m-3" to="/new" >New Entry</Link> <br/></p>
            
    </div>
    )
}


export default NavBar