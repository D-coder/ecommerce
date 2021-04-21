import React, { useEffect, useState } from 'react';
import 'css/Style.css';
import Header from 'components/Header';
import ProductList from 'components/ProductList';
import Footer from 'components/Footer';

const AppLayout = ({ location }) => {
	const [products, setProducts] = useState(null);
	const [filtered, setFilteredProducts] = useState(null);
	const [foceUpdate, setfoceUpdate] = useState(null);
	useEffect(() => {
		async function fetchProducts() {
			const response = await fetch('https://ecomm-app-a4977-default-rtdb.firebaseio.com/products.json', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			const theProducts = await response.json();
			setFilteredProducts(theProducts);
			setProducts(theProducts);
		}
		fetchProducts();
	}, []);

	const filterProducts = (search) => {
		if (search) {
			const filteredProducts = products.filter((item) => item.title.toUpperCase().includes(search.toUpperCase()));
			setFilteredProducts(filteredProducts);
		} else {
			setFilteredProducts(products);
		}
	};

	const filterbyRating = (rating) => {
		if (rating) {
			const filteredProducts = products.filter((item) => item.rating >= rating && item.rating < rating + 1);
			setFilteredProducts(filteredProducts);
		} else {
			setFilteredProducts(products);
		}
	};

	const filterbySize = (sizes) => {
		if (sizes.length > 0) {
			const filteredProducts = products.filter((item) => sizes.includes(item.size));
			setFilteredProducts(filteredProducts);
		} else {
			setFilteredProducts(products);
		}
	};

	const filterbyColors = (colors) => {
		if (colors.length > 0) {
			const filteredProducts = products.filter((item) => colors.includes(item.color));
			setFilteredProducts(filteredProducts);
		} else {
			setFilteredProducts(products);
		}
	};

	const filterbyPrice = (priceRange) => {
		priceRange = priceRange.target.value;
		if (priceRange === 'Price, highest to lowest') {
			const filteredProducts = filtered.sort((a, b) => {
				let priceRange = a.range.split('-');
				const newPrice1 = priceRange[1];
				priceRange = b.range.split('-');
				const newPrice2 = priceRange[1];
				return newPrice2 - newPrice1;
			});
			setfoceUpdate(null);
			setFilteredProducts(filteredProducts);
		} else if (priceRange === 'Price, lowest to highest') {
			const filteredProducts = filtered.sort((a, b) => {
				let priceRange = a.range.split('-');
				const newPrice1 = priceRange[1];
				priceRange = b.range.split('-');
				const newPrice2 = priceRange[1];
				return newPrice1 - newPrice2;
			});
			setfoceUpdate(false);
			setFilteredProducts(filteredProducts);
		} else {
			setfoceUpdate(true);
			setFilteredProducts(filtered);
		}
	};

	return (
		<>
			<Header products={products} location={location} filteredProducts={(e) => filterProducts(e)} />
			{!products ? (
				<div style={{ height: '66vh' }}>
					<div class='spinner-border text-danger' role='status'>
						<span class='sr-only'>Loading...</span>
					</div>
				</div>
			) : (
				<>
					<ProductList
						filterbyPrice={filterbyPrice}
						filterbyColors={filterbyColors}
						filterbySize={filterbySize}
						filterbyRating={(rating) => filterbyRating(rating)}
						location={location}
						products={filtered}
					/>
				</>
			)}
			<Footer />
		</>
	);
};

export default AppLayout;
