import { loadProducts } from '../data/products.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

new Promise((resolve,reject) => {
  loadProducts(() => {
    resolve();
  })
})
.then(() => {
  renderOrderSummary();
  renderPaymentSummary();
})

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/