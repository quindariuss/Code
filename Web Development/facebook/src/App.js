import react from 'react';
import { ReactComponent as Map} from './icons/map.svg';
import { ReactComponent as Book} from './icons/book.svg';
import { ReactComponent as Target} from './icons/target.svg';


function App()
{
	return(
			<Navbar>
				<NavItem icon = {<Map/>}/>
				<NavItem icon = {<Target/>}/>
				<NavItem icon = {<Book/>}/>
			</Navbar>
	);
}

function Navbar(props)
{
	return(
		<nav className='navbar'>
			<ul className='navbar-nav'>
				{props.children}
			</ul>
		</nav>
	);
}

function NavItem(props)
{
	return(
		<li className='nav-item'>
			<a href='#' className='icon-button'>
				{props.icon}
			</a>
		</li>
	);
}

export default App;