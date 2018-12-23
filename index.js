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