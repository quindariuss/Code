import Search from './search';
import posts from './words-small.json'

const App = () => {
	return (
		<div>
			<Search />
			<ul>
				{posts.map((post) => (
					<li>{post}</li>
				))}
			</ul>
		</div>
	);
}


export default App;