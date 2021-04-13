import react,{useState} from 'react';

function App()
{
	return(
			<Form/>
	);
}

function Form() {
	  const [name, setName] = useState("");
	  
	  const handleSubmit = (submittedValue) => 
	  {
		 alert(`You Submitted: ${name}`)
	  }

	  return (
		<form onSubmit={(handleSubmit)}>
		  <label>
				Value:
				<input
				  type="text"
				  value={name}
				  onChange={e => setName(e.target.value)}
				/>
		  </label>
		  <input type="submit" value="Submit" />
		</form>
	  );
	}


export default App;