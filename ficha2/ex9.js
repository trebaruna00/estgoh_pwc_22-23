function calcularmedia(listanum){
    var soma = 0;
    for(var i = 0; i < listanum.length; i++){
        soma += listanum[i];
    }
    var media = soma / listanum.length;
    return media;

}

var listanum = [1,2,3,4,5,6,7,8,9,10];
var media= calcularmedia(listanum);
console.log(media);