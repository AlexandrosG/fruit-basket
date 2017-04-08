import React from 'react';
import PropTypes from 'prop-types';

const Discount = ({discount}) => {
  let discountedValue =  `${(discount.quantity * discount.value).toFixed(2)} CHF`;

  return (
  	<p className="text-danger">
		- {discountedValue} {discount.name}
	</p>
  );
};

Discount.propTypes = {
  discount: PropTypes.object
};

export default Discount;
