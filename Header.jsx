import React from "react";
import logo from "./logo.avif";
const Header=()=>{

    return (
        <>
         <div className="header">
         <img style={{height:"100px",width:"100px" }} src={logo} alt='logo'/>
         <h1 styel={{postition:"center"}}> Keep Storing Important Data</h1>
         </div>

        </>
    );
};

export default Header;