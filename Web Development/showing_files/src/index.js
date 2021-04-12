import React, { useState } from 'react';
import reactdom from 'react-dom';

function Count() 
{
	const [count, setCount] = useState('');
	
	return (
		<div>
		  <p>
		  	You clicked {count} times
		  </p>
		  <button onClick={() => setCount(count.concat("added"))}>
		  	Click me
		  </button>
		</div>
	);
}

reactdom.render
(
	<Count/>,
	document.getElementById('root')
);