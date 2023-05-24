function inverterArray(array) {
    var temp  = [];
    for(var i = array.length - 1; i >= 0; i--) {
      temp.push(array[i]); 
    }
   return temp;
}

const array = [1, 2, 3, 4, 5, 6];
console.log(inverterArray(array)); // [6, 5, 4, 3, 2, 1]