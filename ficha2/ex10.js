function combinarArrays(array1, array2){
    var temp = array1.slice();

    for(var i = 0; i < array2.length; i++){
        temp.push(array2[i]);   
    }

    return temp;
}

var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,10];

console.log(combinarArrays(array1, array2));