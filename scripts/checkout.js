import { loadProducts, loadProductsFetch } from '../data/products.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'


async function loadPage () {
  try{
    await loadProductsFetch();
    renderOrderSummary();
    renderPaymentSummary();
  }
  catch(error){
    console.log('something went wriong, try again later');
  }
}

loadPage();


/*
loadProductsFetch()
.then(() => {
  renderOrderSummary();
  renderPaymentSummary();
})
*/
/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/