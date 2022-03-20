import React from 'react';
import { useState, useEffect } from 'react';
// import {withRouter} from 'react-router-dom';
import {useParams} from 'react-router-dom';
const Update = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const {id} = useParams();

    useEffect( async () => {      
     let result = await fetch('http://127.0.0.1:8000/api/edit/'+id);
     
      result =await result.json();
      // console.log(result.name);
      setData(result[0])
      setName(result[0].name)
      setEmail(result[0].email)
          
      },[])

      function UpdateOps(id){

        // formData.append('name',name);
        // formData.append('email',email);


    
       
      }


    return ( 
    <>

<h1>Update Page</h1>
<div>
      <label for="fname">First name:</label><br />
        <input type="text"  id="fname" defaultValue={data.name}  onChange={(e)=>setName(e.target.value)}  name="name" /><br />
        <label for="email">Last name:</label><br/>
        <input type="text"  id="email" name="email" defaultValue={data.email} onChange={(e)=>setEmail(e.target.value)}  /><br/> 

        <button type="submit" value="Submit"  onClick={()=>{UpdateOps(data.id)}}>Update</button>
        </div>
    
    </> );
}
 
export default Update;