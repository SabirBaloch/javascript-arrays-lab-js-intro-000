var kittens = ['Milo','Otis','Garfield']; //define your array here

// Add your functions and code here
var destructivelyAppendKitten=(name)=>{
kittens.push('Ralph');

}
var destructivelyPrependKitten=(name)=>{
kittens.unshift('Bob');
}
var destructivelyRemoveLastKitten=()=>{
kittens.pop();

}
var destructivelyRemoveFirstKitten=()=>{
  kittens.shift();
}
var appendKitten=(name)=>{
  return [...kittens, 'Broom'];
}
var prependKitten=(name)=>{
  return['Arnold', ...kittens];
}

var removeLastKitten=()=>{
return kittens.slice(0,kittens.length-1)
  
}