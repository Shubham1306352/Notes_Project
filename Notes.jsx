import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Not from "./Not";
import "./StyleNotes.css";

const Notes=()=>{

    const [addItem,setAddItem]=useState([]);



 const addNote=(note)=>{
   //alert("dadt");
   setAddItem((prev)=>{
     return [...prev,note];
   });
 };

  const onDelete=(id)=>{

    setAddItem((olddata)=>
        olddata.filter((currdata,index)=>{
           return  index!==id;
        })
    )

  }


    return (
        <>
        <Header/>
        <CreateNote
            passNote={addNote}
        />
     
      {
        addItem.map((currval,index)=>{
            return (
            <Not key={index} 
            id={index} 
            title={currval.title}
            content={currval.content}
            deleteItem={onDelete}
            />
            )
        })
      }

        <Footer/>

        </>
    );
};

export default Notes;