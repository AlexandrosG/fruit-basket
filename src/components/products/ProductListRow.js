import React, {PropTypes} from 'react';
import Discount from './Discount';
import DiscountedPrice from './DiscountedPrice';

const ProductListRow = ({product}) => {
  let subtotal = (product.quantity * product.price).toFixed(2);
  return (
  	<tr>
		<td data-th="Product">
			<div className="row product">
				<div className="col-sm-2 hidden-xs">
					<img src={process.env.PUBLIC_URL + '/images/' + product.title.toLowerCase() + '.png'} alt={product.title} className="img-responsive" />
				</div>
				<div className="col-sm-10">
					<h4 className="">{product.title}</h4>
					{ product.discount ? <Discount discount={product.discount} /> : null }
				</div>			
			</div>
		</td>
		<td data-th="Price">{product.price.toFixed(2)}</td>
		<td data-th="Quantity">{product.quantity}</td>
		<td data-th="Subtotal" className="text-center">
			{product.discount ? 
				<DiscountedPrice subtotal={subtotal} discount={product.discount} /> : subtotal + ' CHF'}
		</td>
	</tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
