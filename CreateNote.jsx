import React,{useState} from "react";
import "./StyleNotes.css";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote=(props)=>{
    const [expand,setExpand]=useState(false);
    const [note,setNote]=useState({

        title:"",
        content:"",
 
    });

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });

    };

    const inputEvent=(event)=>{
     
        const value=event.target.value;
        const name=event.target.name;

        //const[name,value]=event.target;

        setNote((prev)=>{
            return{
                ...prev,
                [name]:value,
            };
        });
    };

   const expandItem=()=>{
       setExpand(true);
   }

   const backToNormal=()=>{
    setExpand(false);
   }


    return (
        <>
        <div className="main_note" onDoubleClick={backToNormal}   
>
            <form>

             {  expand?
              
                <input 
                type="text" 
                name="title"
                value={note.title} 
                onChange={inputEvent} 
                placeholder="Title" 
                autoComplete="off"/>:null}
                <textarea 
                rows="" 
                column="" 
                name="content"
                value={note.content} 
                onChange={inputEvent} 
                placeholder="Write a note"
                onClick={expandItem} 
                />

                {  expand?
                <Button variant="outlined" onClick={addEvent}>
                   <AddIcon className='plus_sign'/> 
                </Button>:null}
            </form>
        </div>

        </>
    );
};

export default CreateNote;