// console.log(parseFloat("50"));
// console.log(parseFloat("50.00"));
// console.log(parseFloat("50,00"));
// console.log(parseFloat(("50,20").replace(',','.')));
// console.log(parseFloat("50.20"));

// console.log(parseInt("50.20").toString());
// console.log(parseFloat("50.20").toString());
// console.log(parseFloat("50.20").toFixed(2));
// console.log(parseFloat("50.00"));

// console.log(Number.isInteger("50") ? Number.parseInt("50").toString() : Number.parseFloat("50").toFixed(2).replace('.', ','));

console.log(Number.isInteger(parseFloat("50.20")) ? Number.parseInt("50.20").toString() : Number.parseFloat("50.20").toFixed(2).replace('.', ','));
console.log(Number.isInteger(parseFloat("50.00")) ? Number.parseInt("50.00").toString() : Number.parseFloat("50.00").toFixed(2).replace('.', ','));