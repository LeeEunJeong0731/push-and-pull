function zero(fistNumber , secondNumber, callback){
  return callback(fistNumber , secondNumber)
}
let a = zero(1,2, function(a, b){
  return a + b
});
console.log(a)

function one(fistNumber,secondNumber, callback){
  return callback(fistNumber,secondNumber)
}
let b = one (function(a,b){
  return a + b
});
console.log(b(2,3))