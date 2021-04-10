import React from 'react';
import ReactDOM from 'react-dom';


function formatDate(date) {
	  return date.toLocaleDateString();
	}
	
	function Comment(props) {
	  return (
		<div className="Comment">
		  <div className="UserInfo">
			<img
			  className="Avatar"
			  src={props.author.avatarUrl}
			  alt={props.author.name}
			/>
			<div className="UserInfo-name">
			  {props.author.name}
			</div>
		  </div>
		  <div className="Comment-text">{props.text}</div>
		  <div className="Comment-date">
			{formatDate(props.date)}
		  </div>
		</div>
	  );
	}
	
	const comment = {
	  date: new Date(),
	  text: 'I hope you enjoy learning React!',
	  author: {
		name: 'Hello Kitty',
		avatarUrl: 'https://placekitten.com/g/64/64',
	  },
	};
	
	const newcommet = 
	{
		date:new Date(),
		text: 'Hellllllo',
		author:
		{
			name: 'Hello new ',
			avatarUrl: 'https://www.google.com/search?q=dog+images&client=safari&rls=en&sxsrf=ALeKk01VTUsEC8hOkHAXktf1UMl9Bg9Vlg:1618008368803&tbm=isch&source=iu&ictx=1&fir=gM3Cz7MsHS_tAM%252CNzcFCDirz3vE7M%252C_&vet=1&usg=AI4_-kRt--UsjXW5-3Kw_fKWnN7IdYmnfQ&sa=X&ved=2ahUKEwikqsPwnvLvAhVJSjABHbVbDcUQ9QF6BAgQEAE#imgrc=gM3Cz7MsHS_tAM',
		},
	};
	
	ReactDOM.render(
	  <Comment
		date={newcommet.date}
		text={newcommet.text}
		author={newcommet.author}
	  />,
	  document.getElementById('root')
	);
	
	