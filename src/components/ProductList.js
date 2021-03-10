import React from 'react';
import Product from 'components/Product';
import 'css/productList.css';

const productData = [
	{
		title: "Women's Daily Hoodie",
		range: { old: '60.00', new: '40.00' },
		rating: 4.4
	},
	{
		title: 'Hoodie',
		range: { old: '50.00', new: '39.00' },
		rating: 4.3
	},
	{
		title: 'Crop-top Hoodie',
		range: { old: '50.00', new: '40.00' },
		rating: 4.6
	},
	{
		title: 'Oversize Hoodie',
		range: { old: '40.00', new: '30.00' },
		rating: 4.9
	},
	{
		title: "Men's Hoodie",
		range: { old: '55.00', new: '35.00' },
		rating: 4.6
	},
	{
		title: 'Long Sweatshirt',
		range: { old: '50.00', new: '26.00' },
		rating: 4.1
	}
];

const ProductList = () => {
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
						<legend>
							<h5 style={{ fontWeight: 'bold' }}>Colour</h5>
						</legend>

						
							<ul className='filter-list'>
								<li>
									<input type='checkbox' className='colour' defaultValue='black' id='black' /> <label htmlFor='black'>Black</label>
								</li>
								<li>
									<input type='checkbox' className='colour' defaultValue='white' id='white' /> <label htmlFor='white'>White</label>
								</li>
								<li>
									<input type='checkbox' className='colour' defaultValue='grey' id='grey' /> <label htmlFor='grey'>Grey</label>
								</li>
								<li>
									<input type='checkbox' className='colour' defaultValue='red' id='red' /> <label htmlFor='red'>Red</label>
								</li>
								<li>
									<input type='checkbox' className='colour' defaultValue='blue' id='blue' /> <label htmlFor='blue'>Blue</label>
								</li>
							</ul>
						
					</fieldset>
					<fieldset>
						<legend>
							<h6 style={{ fontWeight: 'bold' }}>Sizes</h6>
						</legend>
						
							<ol className='filter-list'>
								<li>
									<input type='checkbox' className='size' defaultValue='xs' id='xs' /> <label htmlFor='xs'>XS</label>
								</li>
								<li>
									<input type='checkbox' className='size' defaultValue='sm' id='sm' /> <label htmlFor='sm'>S</label>
								</li>
								<li>
									<input type='checkbox' className='size' defaultValue='md' id='md' /> <label htmlFor='md'>M</label>
								</li>
								<li>
									<input type='checkbox' className='size' defaultValue='lg' id='lg' /> <label htmlFor='lg'>L</label>
								</li>
								<li>
									<input type='checkbox' className='size' defaultValue='xl' id='xl' /> <label htmlFor='xl'>XL</label>
								</li>
							</ol>
					
					</fieldset>
					<fieldset>
						<legend>
							<h6 style={{ fontWeight: 'bold' }}>Ratings (above)</h6>
						</legend>
						
							<ol className='filter-list'>
								<li>
									<input type='radio' name='rating' defaultValue='4' id='aboveFour' />
									<label htmlFor='aboveFour'>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star_border</span>
									</label>
								</li>
								<li>
									<input type='radio' name='rating' defaultValue='3' id='aboveThree' />
									<label htmlFor='aboveThree'>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
									</label>
								</li>
								<li>
									<input type='radio' name='rating' defaultValue='2' id='aboveTwo' />
									<label htmlFor='aboveTwo'>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
									</label>
								</li>
								<li>
									<input type='radio' name='rating' defaultValue='1' id='aboveOne' />
									<label htmlFor='aboveOne'>
										<span className='material-icons'>star</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
										<span className='material-icons'>star_border</span>
									</label>
								</li>
							</ol>
						
					</fieldset>
				</div>
				<fieldset>
					<label htmlFor='sort'>Show </label>
					<select name='sort' id='sort'>
						<option defaultValue='price-high'>Price, highest to lowest</option>
						<option defaultValue='price-low'>Price, lowest to highest</option>
						<option defaultValue='newest'>Newest releases</option>
					</select>
				</fieldset>
			</form>
			<h2 className='subheading'>Results</h2>
			<section className='results'>
				<div className='container'>
					<div className='row'>
						{productData.map((product, index) => (
							<div key={index} className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
								<Product index={index} title={product.title} range={product.range} rating={product.rating} />
							</div>
						))}
					</div>
				</div>
			</section>

			<nav aria-label='Pagination' className='pagination'>
				<p>1-6 of 23 products found</p>
				<break></break>
				<ol className='pages'>
					<li>
						<a href='#' aria-label='Current Page, Page 1' aria-current='true'>
							1
						</a>
					</li>
					<li>
						<a href='#' aria-label='Page 2'>
							2
						</a>
					</li>
					<li>
						<a href='#' aria-label='Page 3'>
							3
						</a>
					</li>
					<li>
						<a href='#' aria-label='Page 4'>
							4
						</a>
					</li>
					<li>
						<a href='#' aria-label='Page 5'>
							5
						</a>
					</li>
				</ol>
			</nav>
		</main>
	);
};

export default ProductList;
