import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setUser(res.data)})
        .catch((erreur)=>{
          console.log(erreur)
        })
    }
    ,[])
  return (
    <div className="App">
    
      {
        user.map((el)=> < UserList el={el} />)
      
      }
    </div>
  );
}

export default App;
