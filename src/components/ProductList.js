import React, { useState, useEffect } from 'react';
import Product from 'components/Product';
import { Link } from 'react-router-dom';
import 'css/productList.css';

const ProductList = ({ products, location, filterbyRating, filterbySize, filterbyColors, filterbyPrice }) => {
	const [pagination, setPagination] = useState(0);
	const [colours, setColours] = useState([]);
	const [sizes, setSizes] = useState([]);
	const [state, setstate] = useState(false);
	const [pages, setPages] = useState(
		<li>
			<Link onClick={() => setPagintationOnClick(0)} to='?page=1' aria-label='Current Page, Page 1' aria-current='true'>
				1
			</Link>
		</li>
	);
	console.log(products);
	const setPagintationOnClick = (page) => {
		setPagination(page);
	};

	useEffect(() => {
		const search = location.search;
		const params = new URLSearchParams(search);
		const page = params.get('page');
		if (page) {
			setPagination(page - 1);
		}
		const pagess = [];
		if (products.length > 0) {
			let pageSize = products.length;
			let numPages = 1;
			while (pageSize > 0) {
				pagess.push(
					<li>
						<Link
							onClick={() => setPagintationOnClick(numPages - 1)}
							to={`?page=${numPages}`}
							aria-label='Current Page, Page 1'
							aria-current='true'>
							{numPages}
						</Link>
					</li>
				);
				numPages += 1;
				pageSize = pageSize - 9;
			}
			setPages(pagess);
		}
	}, []);

	useEffect(() => {
		const pagess = [];
		if (products.length > 0) {
			let pageSize = products.length;
			let numPages = 1;
			while (pageSize > 0) {
				pagess.push(
					<li>
						<a
							onClick={() => setPagintationOnClick(numPages - 1)}
							href={`?page=${numPages}`}
							aria-label='Current Page, Page 1'
							aria-current='true'>
							{numPages}
						</a>
					</li>
				);
				numPages += 1;
				pageSize = pageSize - 9;
			}
			setPages(pagess);
		}
	}, [products]);

	const handleColorsChecked = (event) => {
		const theseColors = colours;
		const colorFound = theseColors.findIndex((color) => color === event.target.value);
		if (colorFound > -1) {
			theseColors.splice(colorFound, 1);
		} else {
			theseColors.push(event.target.value);
		}
		console.log(theseColors);
		filterbyColors(theseColors);
		setSizes(theseColors);
	};

	const handleSizesChecked = (event) => {
		const theseSizes = sizes;
		const sizeFound = theseSizes.findIndex((size) => size === event.target.value);
		if (sizeFound > -1) {
			theseSizes.splice(sizeFound, 1);
		} else {
			theseSizes.push(event.target.value);
		}
		filterbySize(theseSizes);
		setColours(theseSizes);
	};

	return (
		<main className='products'>
			<header className='heading'>
				<h1>Sale on Upperwear</h1>
			</header>

			<form className='filters'>
				<h2>Filters</h2>
				<br />

				<div className='filter-options'>
					<fieldset>
						<span style={{ display: 'flex', justifyContent: 'flex-start', flex: '1' }}>
							<h5 style={{ fontWeight: 'bold' }}>Colour</h5>
						</span>

						<span style={{ display: 'flex', flex: '1.5' }}>
							<ul className='filter-list'>
								<li>
									<input onClick={handleColorsChecked} type='checkbox' name='colour' defaultValue='Black' id='black' />{' '}
									<label htmlFor='black'>Black</label>
								</li>
								<li>
									<input onClick={handleColorsChecked} type='checkbox' name='colour' defaultValue='White' id='white' />{' '}
									<label htmlFor='white'>White</label>
								</li>
								<li>
									<input onClick={handleColorsChecked} type='checkbox' name='colour' defaultValue='Grey' id='grey' />{' '}
									<label htmlFor='grey'>Grey</label>
								</li>
								<li>
									<input onClick={handleColorsChecked} type='checkbox' name='colour' defaultValue='Pink' id='pink' />{' '}
									<label htmlFor='red'>Pink</label>
								</li>
								<li>
									<input onClick={handleColorsChecked} type='checkbox' name='colour' defaultValue='Blue' id='blue' />{' '}
									<label htmlFor='blue'>Blue</label>
								</li>
							</ul>
						</span>
					</fieldset>
					<fieldset>
						<span style={{ display: 'flex', justifyContent: 'flex-start', flex: '1' }}>
							<h6 style={{ fontWeight: 'bold' }}>Sizes</h6>
						</span>
						<span style={{ display: 'flex', flex: '1.3' }}>
							<ol className='filter-list'>
								<li>
									<input onClick={handleSizesChecked} type='checkbox' name='size' defaultValue='XS' id='xs' />
									<label htmlFor='xs'>XS</label>
								</li>
								<li>
									<input onClick={handleSizesChecked} type='checkbox' name='size' defaultValue='M' id='md' /> <label htmlFor='md'>M</label>
								</li>
								<li>
									<input onClick={handleSizesChecked} type='checkbox' name='size' defaultValue='L' id='lg' /> <label htmlFor='lg'>L</label>
								</li>
								<li>
									<input onClick={handleSizesChecked} type='checkbox' name='size' defaultValue='XL' id='xl' />{' '}
									<label htmlFor='xl'>XL</label>
								</li>
							</ol>
						</span>
					</fieldset>
					<fieldset>
						<span style={{ display: 'flex', justifyContent: 'flex-start', flex: '1' }}>
							<h6 style={{ fontWeight: 'bold' }}>Ratings (above)</h6>
						</span>
						<span style={{ display: 'flex', flex: '2.45' }}>
							<ol className='filter-list'>
								<li>
									<input onChange={() => filterbyRating(4)} type='radio' name='rating' defaultValue='4' id='aboveFour' />
									<label htmlFor='aboveFour'>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star_border</span>
									</label>
								</li>
								<li>
									<input onChange={() => filterbyRating(3)} type='radio' name='rating' defaultValue='3' id='aboveThree' />
									<label htmlFor='aboveThree'>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
									</label>
								</li>
								<li>
									<input onChange={() => filterbyRating(2)} type='radio' name='rating' defaultValue='2' id='aboveTwo' />
									<label htmlFor='aboveTwo'>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
									</label>
								</li>
								<li>
									<input onChange={() => filterbyRating(1)} type='radio' name='rating' defaultValue='1' id='aboveOne' />
									<label htmlFor='aboveOne'>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
									</label>
								</li>
							</ol>
						</span>
					</fieldset>
				</div>
				<fieldset>
					<label htmlFor='sort'>Show</label>
					<select onChange={filterbyPrice} name='sort' id='sort'>
						<option defaultValue='price-high'>Price, highest to lowest</option>
						<option defaultValue='price-low'>Price, lowest to highest</option>
					</select>
				</fieldset>
			</form>
			<h2 className='subheading'>Results</h2>
			<section className='results'>
				{products.slice(pagination * 9, (pagination + 1) * 9).map((product, index) => (
					<div key={index}>
						<Product picture={product.picture} title={product.title} range={product.range} rating={product.rating} />
					</div>
				))}
			</section>

			<nav aria-label='Pagination' className='pagination'>
				<p>
					{pagination + 1} - {Math.ceil(products.length / 9)} of {products.length} products found
				</p>
				<br />
				<ol className='pages'>{pages}</ol>
			</nav>
		</main>
	);
};

export default ProductList;
