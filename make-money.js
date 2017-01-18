var money = function(cash) {
return cash.toLocaleString("en-US", {style: 'currency', currency: 'USD'})
}
module.exports = money;
