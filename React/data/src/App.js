import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getaList()
      .then(names => {
        if(mounted) {
          setList(names)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">
     <h1>My Grocery List</h1>
     <ul>
       {list.map(name => <li key={name.name}>{name.name}</li>)}
     </ul>
   </div>
  )
}

export default App;


function getList() {
  return fetch('http://localhost:4000/users')
    .then(data => data.json())
}

function getaList()
{
  return fetch("http://localhost:4000/users", 
  {
    "method": "GET",
    "headers": {}
  })
    .then((res) => res.json())
    .then(console.log.bind(console))
    .catch(console.error.bind(console));
}