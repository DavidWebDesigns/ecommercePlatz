import { useState } from 'react';
import '@styles/ProductItem.scss';

import add2Cartbt from '@icons/bt_add_to_cart.svg';
import useGetProducts from '@hooks/useGetProducts';


const ProductItem = ({product}) => {
	// const [cart, setCart] = useState([]);

	// const handleCart = () => {
	// 	setCart('Holi');
	// }
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<img src={add2Cartbt} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;