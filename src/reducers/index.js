import {combineReducers} from 'redux';
import products from './productReducer';

const rootReducer = combineReducers({
  products
})

export default rootReducer;

export const getTotal = state =>
  state.products
    .reduce((total, product) =>
      total + product.price * product.quantity - (product.discount ? product.discount.quantity * product.discount.value : 0),
      0
    )
    .toFixed(2)