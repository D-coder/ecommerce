import React from 'react';

const Header = () => {
	const hamburgerMenu = () => {
		var x = document.getElementById('myTopnav');
		if (x.className === 'menu') {
			x.className += ' responsive';
		} else {
			x.className = 'menu';
		}
	};
	return (
		<header>
			<nav aria-label='Primary' className='navigation'>
				<div className='logo'>
					<a href='index.html'>ADEO</a>
				</div>
				<a className='icon' onClick={hamburgerMenu} onclick='myFunction()'>
					<i class='fas fa-bars'></i>
				</a>
				<ul className='menu' id='myTopnav'>
					<li>
						<a href='#' className='active'>
							Home
						</a>
					</li>
					<li>
						<a href='#'>Shop</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
					<li>
						<a href='#'>
							<span className='material-icons user_products' aria-label='Favourites'>
								favorite_border
							</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<span className='material-icons user_products' aria-label='Items in your cart'>
								shopping_cart
							</span>
						</a>
					</li>
				</ul>
			</nav>
			<form className='search'>
				<input type='search' name='find' id='find' defaultValue='search' />

				<button type='button'>
					<i className='fas fa-search'></i>
				</button>
			</form>
			<ul className='your-products'></ul>
		</header>
	);
};

export default Header;
