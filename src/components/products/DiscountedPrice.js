import React from 'react';
import PropTypes from 'prop-types';

const DiscountedPrice = ({subtotal, discount}) => {
  let discountedPrice =  `${(subtotal - discount.quantity * discount.value).toFixed(2)} CHF`;
  
  return (
  	<div>
		<s>{subtotal} CHF</s> <br />{discountedPrice}
	</div>
  );
};

DiscountedPrice.propTypes = {
  subtotal: PropTypes.string,
  discount: PropTypes.object
};

export default DiscountedPrice;
