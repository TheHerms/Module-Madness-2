
var random = require('./random');
var money = require('./make-money');

exports.total = function() {
  var r = random();
  var t = money(r);
  return t;

}
exports.acc = function() {
  return "Account balance:"+'\n';
}
