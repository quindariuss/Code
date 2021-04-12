import React from 'react';
import REACTDOM from 'react-dom';

class Hello extends React.Component 
{
	render()
	{
		return(
			<h1>Hello World</h1>
		);
	}
}

class NO extends React.Component 
{
	render()
	{
		return(
			<h1>NO</h1>
		);
	}
}

const name = 'Quin'

function format(user)
{
	return 'ser ' + user.first + ' ' + user.last;
}

const user = 
{
	first: 'quin',
	last:  'woods'	
};

const app = document.getElementById('app');

REACTDOM.render(
<div>
<h1>
	Hello, {format(user)}!
</h1>
</div>
	,app);