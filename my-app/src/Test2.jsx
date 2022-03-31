import React, { useEffect } from 'react';
import { useContext } from 'react';
import noteContext from './noteContext';

const Test2 = () => {

  const a = useContext(noteContext);

  useEffect(()=>{
    a.update();
  },[])
    
    return (
        <>
        
        {/* <h1>This is {a.name}</h1> */}
        <h1>This is {a.state.name}</h1>
        </>
      );
}
 
export default Test2;