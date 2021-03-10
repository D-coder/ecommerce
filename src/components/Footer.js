import React from 'react';
import 'css/footer.css';

const Product = () => {
	return (
		<footer className='page-footer'>
			<ul className='social'>
				<li>
					<a href='#'>
						<i className='fab fa-facebook-f'></i> Facebook
					</a>
				</li>
				<li>
					<a href='#'>
						<i className='fab fa-instagram'></i> Instagram
					</a>
				</li>
				<li>
					<a href='#'>
						<i className='fab fa-twitter'></i> Twitter
					</a>
				</li>
			</ul>

			<ul className='legal'>
				<li>
					<a href='#'>Terms of Use</a>
				</li>
				<li>
					<a href='#'>Privacy Policy</a>
				</li>
				<li>
					<a href='#'>Accessibility Policy</a>
				</li>
			</ul>

			<p className='copyright'>&copy; Copyright, ADEO 2021.</p>
		</footer>
	);
};

export default Product;
