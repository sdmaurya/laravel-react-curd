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

  async function UpdateOps(id){
   
          // let item = {name,email,password};   
          // let result =    await fetch('http://127.0.0.1:8000/api/update/'+id,{
          //  method:'PUT',
          //  headers:{
          //      'Content-Type':'application/json',
          //      "Accept":"application/json"
          //      },
          //    body:JSON.stringify(item)
          //  });
          //  result =await result.json();
          //  console.log(result);
     
      const formData = new FormData();         
          formData.append('name',name);
          formData.append('email',email);

          let result =    await fetch('http://127.0.0.1:8000/api/update/'+id+'?_method=PUT',{
            method:'POST',          
              body:formData
            });
   
          alert('Data updated successfully')
       
      }


    return ( 
    <>

<h1>Update Page</h1>
<div>
      <label>First name:</label><br />
        <input type="text"  id="name" defaultValue={data.name}  onChange={(e)=>setName(e.target.value)}  name="name" /><br /><br /><br />
        <label >Last name:</label><br/>
        <input type="text"  id="email" name="email" defaultValue={data.email} onChange={(e)=>setEmail(e.target.value)}  /><br/> 

        <button type="submit" value="Submit"  onClick={()=>{UpdateOps(data.id)}}>Update</button>
        </div>
    
    </> );
}
 
export default Update;