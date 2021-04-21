import React, { useEffect, useState } from 'react';

const Header = ({ filteredProducts, products }) => {
	const [searchItem, setSearchItem] = useState('');
	useEffect(() => {
		const search = location.search;
		const params = new URLSearchParams(search);
		const searchFind = params.get('find');
		if (products && searchFind && products.length > 0) {
			filteredProducts(searchFind);
			setSearchItem(searchFind);
		}
	}, [products]);
	const hamburgerMenu = () => {
		var x = document.getElementById('myTopnav');
		if (x.className === 'menu') {
			x.className += ' responsive';
		} else {
			x.className = 'menu';
		}
		var x = document.getElementById('search-form');
		if (x.className === 'search') {
			x.className += ' responsive';
		} else {
			x.className = 'search';
		}
	};
	return (
		<header className='page-header'>
			<div className='logo'>
				<a href='/'>ADEO</a>
			</div>
			<a className='icon' onClick={hamburgerMenu}>
				<i className='fas fa-bars'></i>
			</a>
			<nav aria-label='Primary' className='navigation'>
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
			<form id='search-form' className='search'>
				<input
					value={searchItem}
					onChange={(e) => {
						setSearchItem(e.target.value);
						filteredProducts(e.target.value);
					}}
					type='text'
					name='find'
					id='find'
				/>

				<button type='button'>
					<i className='fas fa-search'></i>
				</button>
			</form>
		</header>
	);
};

export default Header;
