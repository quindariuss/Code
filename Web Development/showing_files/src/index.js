import React from 'react';
import REACTDOM from 'react-dom';



function Greet(user) {
	  if (user) {
		return <h1>Hello, {format(user)}!</h1>;
	  }
	  return <h1>Hello, Stranger.</h1>;
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
	Hello, {Greet(user)}
</h1>
</div>
	,app);