import react from 'react';
import reactdom from 'react-dom';

function Hello()
{
	return(
	<h1>Hello World<h1>
)
}

reactdom.render
(
	<Hello />,
	document.getElementbyId('root')
)
