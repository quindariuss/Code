import react from 'react'
import reactdom from 'react-dom'
import {useState, useEffect} from 'react'
import { PostgrestClient } from '@supabase/postgrest-js'

const REST_URL = 'http://159.65.177.30:3000'
const postgrest = new PostgrestClient(REST_URL)

function MyComponent() {
	  const [error, setError] = useState(null);
	  const [isLoaded, setIsLoaded] = useState(false);
	  const [items, setItems] = useState([]);

	  // Note: the empty deps array [] means
	  // this useEffect will run once
	  // similar to componentDidMount()
	  useEffect(() => {
		fetch("http://159.65.177.30:3000/todos")
		  .then(res => res.json())
		  .then(
			(result) => {
			  setIsLoaded(true);
			  setItems(result);
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  setIsLoaded(true);
			  setError(error);
			}
		  )
	  }, [])

	  if (error) {
		return <div>Error: {error.message}</div>;
	  } else if (!isLoaded) {
		return <div>Loading...</div>;
	  } else {
		return (
		  <ul>
			{items.map(item => (
			  <li key={item.id}>
				{item.task} {item.done}
			  </li>
			))}
		  </ul>
		);
	  }
	}

	reactdom.render
	(
		<MyComponent/>,
		document.getElementById('root')
	)