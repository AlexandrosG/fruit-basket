import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTotal } from '../../reducers'
import ProductList from './ProductList';

class ProductsPage extends React.Component {
  render() {
    const products = this.props.products;
    const total = this.props.total;
    return ( 
      <div className="container">
        <h1>Fruit Basket</h1>
        <ProductList products={ products } total={ total }/>
      </div>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  total: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
    total: getTotal(state)
  };
}

export default connect(mapStateToProps)(ProductsPage);
