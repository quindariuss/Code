import react from 'react';
import ReactDOM from 'react-dom';

function Comment(props) {
	  return (
		<div className="Comment">
		  <div className="UserInfo">
			<Avatar />
			<div className="UserInfo-name">
			  {props.author.name}
			</div>
		  </div>
		  <div className="Comment-text">
			{props.text}
		  </div>
		  <div className="Comment-date">
			{formatDate(props.date)}
		  </div>
		</div>
	  );
	}
	
	
	
ReactDOM.render
(
<h1></h1>,
document.getElementById('root')
);

function Avatar(props) {
    return (
		<img className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name} 
		/>
	);
}
