import React, { useState } from 'react';
import reactdom from 'react-dom';

function State() 
{
	const [state, setState] = useState(false);
	
	return (
		<div>
		  <p>
		  	The State is {state.toString()} 
		  </p>
		  <button onClick={() => setState(!state)}>
		  	Click me
		  </button>
		</div>
	);
}

reactdom.render
(
	<State/>,
	document.getElementById('root')
);