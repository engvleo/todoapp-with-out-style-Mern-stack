import React, { useState,useEffect } from 'react';

import './App.css';
import axios from 'axios';


function App() {

  const [todo, settodo] = useState('');
  const [list,setlist]=useState([]);

  const add=()=>{
    const data={
      text:todo,
    }
    axios.post('https://todojeem.herokuapp.com/add',data);
  }
  const del=(id)=>{
    axios.delete(`https://todojeem.herokuapp.com/delete/${id}`)
  }
 
  useEffect(() => {
    axios.get('https://todojeem.herokuapp.com/').then(response =>setlist(response.data))
      .catch(error => console.log(error))
    console.log(list);
  });
  return (
    <div>
      <h1>Todo App</h1>   
        <input type='text' placeholder='write some thing todo...'onChange={(e)=>settodo(e.target.value)}></input>
        <button type='submit'onClick={add}>ADD</button>

        <div>
          {list.map(val=>{
            return(<div>
                <button onClick={()=>del(val._id)}>X  </button>
              <span>{val.text}</span>
              <br/>
            </div>
              
            )
          })}
        </div>
    

      
 
    </div>
  )
}

export default App
