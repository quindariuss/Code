import react from 'react';
import reactdom from 'react-dom';

function Hello()
{
	return(
		<h1>Hello, Worlds!</h1>
	)
}

reactdom.render
(
	<div>
	<Hello/>
	</div>,
	document.getElementById('root')
)

