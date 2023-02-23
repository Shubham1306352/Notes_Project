import React from "react";
import "./StyleNotes.css";

const Footer=()=>{
    const year=new Date().getFullYear();

    return (
        <>
        <footer>
           <p> Copyright @ {year}</p> 
        </footer>

        </>
    );
};

export default Footer;