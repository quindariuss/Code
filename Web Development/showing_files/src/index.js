import react from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) 
{
	return <h1>Hello, {props.name}</h1>;
}
	
const greet = <Welcome name="Quin" />;
ReactDOM.render(
greet,
document.getElementById('root')
);
