import react from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
	  return<h1>Hello, {props.name}</h1>;
	}
	
	function Greet() {
	  return (
		<div>
		  <Hello name="Sara" />
		  <Hello name="Cahal" />
		  <Hello name="Edite" />
		</div>
	  );
	}
	
	ReactDOM.render(
	  <Greet />,
	  document.getElementById('root')
	);