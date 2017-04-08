import * as types from './actionTypes';
import productsApi from '../api/ProductsApi';

export function loadProductsSuccess(products) {
  return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function loadProducts() {
  return function(dispatch) {
    return productsApi.getProducts(products => {
      dispatch(loadProductsSuccess(products));
    });
  };
}
