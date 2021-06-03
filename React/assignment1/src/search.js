const clear = () =>{

}
const SearchBar = ({ searchQuery, setSearchQuery }) => (
	<form action="/" method="get">

		<input
			value={searchQuery}
			autoComplete="off"
			onChange={event => setSearchQuery(event.target.value)}
			onInput={event => setSearchQuery("")}
			type="text"
			id="header-search"
			placeholder="Search Words"
			name="s"
		/>

	</form>
);

export default SearchBar;