import React, { useState } from 'react';

// import { useContext } from 'react';
import Test2 from './Test2';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const s1 = {
        "name":"surendra",
        "class":12
    }
   const [state,setState] =  useState(s1);

   const update = ()=>{       
    setTimeout(()=> {
        setState({
            "name":"MAURYA",
            "class":15
        })
    },1000);
   }
    


    return ( <>
    
    <h1>Hello </h1>
    <NoteContext.Provider value={{state,update}}>
    {props.children}
    {/* or */}
    {/* We can pass directly children component */}
    {/* <Test2/> */}
    </NoteContext.Provider>



    </> );
}
 
export default NoteState;