import React from 'React';
import 'css/product.css';

const Product = ({ rating, title, range, picture }) => {
	const productImage = require(`img/${picture}.jpeg`);
	const priceRange = range.split('-');
	const oldPrice = priceRange[0];
	const newPrice = priceRange[1];
	return (
		<article className='product'>
			<header>
				<img src={productImage.default} alt='Product Image' />
				<h3>{title}</h3>
				<data defaultValue='40'>
					<del>${oldPrice}</del> <ins>${newPrice}</ins>
				</data>
				<p>Here is a shot of this product..</p>
				<dl>
					<dd>
						{rating}
						<span className='material-icons'>star</span>
						<span className='material-icons'>star</span>
						<span className='material-icons'>star</span>
						<span className='material-icons'>star</span>
						<span className='material-icons'>star_half</span>
					</dd>
				</dl>
				<a href='#'>see more</a>
			</header>
			<form>
				<fieldset className='product_info'>
					<legend>Colours</legend>
					<ul>
						<li className='padding-right-8'>
							<label>
								<input type='radio' name='colour' defaultValue='r' /> Red
							</label>
						</li>
						<li className='padding-right-8'>
							<label>
								<input type='radio' name='colour' defaultValue='w' /> White
							</label>
						</li>
						<li className='padding-right-8'>
							<label>
								<input type='radio' name='colour' defaultValue='b' /> Blue
							</label>
						</li>
					</ul>
				</fieldset>
				<fieldset className='product_info'>
					<legend>Sizes</legend>
					<ol>
						<li className='padding-right-8'>
							<label>
								<input type='radio' name='size' defaultValue='m' /> M
							</label>
						</li>
						<li className='padding-right-8'>
							<label>
								<input type='radio' name='size' defaultValue='l' /> L
							</label>
						</li>
						<li className='padding-right-8'>
							<label>
								<input type='radio' name='size' defaultValue='xl' /> XL
							</label>
						</li>
					</ol>
				</fieldset>
			</form>
			<footer className='product_footer'>
				<button type='button'>
					<i className='fas fa-cart-plus bottom-8'></i>{' '}
				</button>
				<button type='button'>
					<i className='far fa-heart bottom-8'></i>
				</button>
			</footer>
		</article>
	);
};

export default Product;
