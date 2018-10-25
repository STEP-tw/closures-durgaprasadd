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
  return makeCounterFromN(0);
}

//---------makeDeltaTracker---------
const makeDeltaTracker = function(old){
  return function(delta){
    if(!delta){delta=0;}
    return {old:old, delta:delta, new:old=old+delta};
  }
}

//--------makeFiboGenerator------------
const makeFiboGenerator = function(prevValue,nextValue){
  if(!prevValue){prevValue =0;nextValue = 1;}
  if(!nextValue){nextValue = prevValue;prevValue =0;}
  return function(){
    let currentValue = prevValue;
    prevValue = nextValue;
    nextValue = currentValue+prevValue;
    return currentValue;
  }
}

//-----------makeCycler---------------
const makeCycler = function(list){
  let index=0;
  let result = list.slice();
  return function(){
    return result[(index++) % result.length];
  }
}

//-------------curry-------------
const curry = function(func,number){
  return function(firstArgument,secondArgument){
    return func(number,firstArgument,secondArgument);
  }
}

//-------------compose----------
const compose = function(firstFunction,secondFunction){
  return function(list1,list2){
    return firstFunction(secondFunction(list1,list2));
  }
}


exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
