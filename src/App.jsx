import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [things, setThings] = useState([]);

  useEffect(()=> {
    const fetchThings = async()=> {
      const response = await axios.get('http://localhost:3000/api/things');
      setThings(response.data);
    };
    fetchThings();
  }, []);

  return (
    <>
        <h1>Acme Things { things.length }</h1>
        <ul>
          {
            things.map( thing =>{
              return (
                <li key={ thing.id }>
                  { thing.name }
                </li> 
              );
            })
          }
        </ul>
    </>
  )
}

export default App
