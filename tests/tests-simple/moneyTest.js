import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test suite: formatCurrency');


console.log("Convrts cents into dollars");

if (formatCurrency(2095) === '20.95'){
  console.log("pased");
}else{
  console.log("failed");
}
console.log('Wrorks with 0');
if (formatCurrency(0) === '0.00'){
  console.log("pased");
}else{
  console.log("failed");
}

console.log('Rounds up to the nearest cent');
if (formatCurrency(2000.5) === '20.01'){
  console.log("pased");
}else{
  console.log("failed");
}