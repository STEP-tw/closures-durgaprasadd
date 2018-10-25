//---------makeConstant------------
const makeConstant = function(args){
  return function(){
    return args;
  }
}

//---------makeCounterFromN---------
const makeCounterFromN = function(count){
  return function(){
    return count++;
  }
}

//---------makeCounterFromZero--------
const makeCounterFromZero = function(){
  let count=0;
  return function(){
    return count++;
  }
}

//---------makeDeltaTracker---------
const makeDeltaTracker = function(old){
  return function(delta){
    if(!delta){delta=0};
    let sum = old+delta;
    old = old+delta;
    return {old:sum-delta, delta:delta, new:sum};
  }
}

//--------makeFiboGenerator------------
const makeFiboGenerator = function(prevValue,nextValue){
  if(!prevValue){prevValue =0;nextValue = 1};
  if(!nextValue){nextValue = prevValue;prevValue =0};
  return function(){
    let currentValue = prevValue;
    prevValue = nextValue;
    nextValue = currentValue+prevValue;
    return currentValue;
  }
}

const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
