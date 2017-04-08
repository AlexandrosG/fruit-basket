import React from 'react';
import PropTypes from 'prop-types';
import ProductListRow from './ProductListRow';

const ProductList = ({products, total}) => {
  return (
    <table id="cart" className="table table-hover table-condensed">
      <thead>
        <tr>
          <th style={{width: '50%'}}>Product</th>
          <th style={{width: '10%'}}>Price</th>
          <th style={{width: '8%'}}>Quantity</th>
          <th style={{width: '22%'}} className="text-center">Subtotal</th>
          <th style={{width: '10%'}}></th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => 
          <ProductListRow key={product.id} product={product} />
        )}
      </tbody>
      <tfoot>
          <tr className="visible-xs">
            <td className="text-center col-xs-12" colSpan={4}><strong>Total {total}</strong></td>
          </tr>
          <tr>
            <td className="col-xs-12 col-sm-8"></td>
            <td colSpan={2} className="hidden-xs"></td>
            <td className="hidden-xs col-sm-4 text-center"><strong>Total {total}</strong></td>
          </tr>
        </tfoot>
    </table>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  total: PropTypes.string
};

export default ProductList;