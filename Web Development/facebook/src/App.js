import react, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import { ReactComponent as Map} from './icons/map.svg';
import { ReactComponent as Book} from './icons/book.svg';
import { ReactComponent as Target} from './icons/target.svg';


function App()
{
	return(
			<Navbar>
				<NavItem icon = {<Map/>}>
				<DropdownMenu/>
				</NavItem>
				<NavItem icon = {<Target/>}/>
				<NavItem icon = {<Book/>}>
				<DropdownMenu/>
				</NavItem>
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
	const [open, setOpen] = useState(false);
	return(
		<li className='nav-item'>
			<a href='#' className='icon-button' onClick={() =>setOpen(!open)}>
				{props.icon}
			</a>
			
			{open && props.children}
		</li>
	);
}

function DropdownMenu()
{
	const [menu, setMenu] = useState('main');
	
	function DropdownItem(props)
	{
		return(
			<a href="#" className="menu-item" onClick={props.goToMenu && setMenu(props.goToMenu)}>
				<span className="icon-button">{props.leftIcon}</span>
				{props.children}
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		);
	}
	return(
		<div className='dropdown'>
			<CSSTransition 
			in={menu === 'main'} 
			unmountOnExit 
			timeout={500} 
			classNames="menu-primary">
				<div className='menu'>
					<DropdownItem leftIcon='🤨'>
						My Profile
					</DropdownItem>
					<DropdownItem>
						My Profile
					</DropdownItem>
					<DropdownItem goToMenu='settings'>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>
			
			<CSSTransition 
			in={menu === 'settings'} 
			unmountOnExit 
			timeout={500} 
			classNames='menu-secondary'>
			<div className='menu'>
				<DropdownItem leftIcon='🤨' goToMenu='main'>
					Back
				</DropdownItem>
				<DropdownItem>
					My Profile
				</DropdownItem>
			
			</div>
		</CSSTransition>
			
		</div>
	);
}

export default App;