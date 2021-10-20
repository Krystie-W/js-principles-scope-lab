var customerName = 'bob';
console.log(customerName);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

console.log(upperCaseCustomerName());

function setBestCustomer() {
  bestCustomer = 'not bob';
    return bestCustomer;
}

console.log(setBestCustomer());
console.log(bestCustomer);

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

console.log(overwriteBestCustomer());

console.log(bestCustomer);

const leastFavoriteCustomer = 'Jennifer';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Toby';
    return leastFavoriteCustomer;
}

console.log(changeLeastFavoriteCustomer());