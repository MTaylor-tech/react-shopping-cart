import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const value = useContext(ProductContext);

	return (
		<div className="products-container">
			{value.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={value.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
