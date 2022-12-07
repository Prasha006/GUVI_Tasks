var rotateArray = function (arr,val,pos){
    arr=arr.concat(arr.splice(0,arr.indexOf(val)+pos));
    return arr;
}
var adjustedArray=rotateArray(['N','E','S','W'],'S',1);