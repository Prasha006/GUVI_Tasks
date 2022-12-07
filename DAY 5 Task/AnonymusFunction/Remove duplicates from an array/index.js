var arr1 = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
 
  var removeDuplicates = function (arr) {
        return arr1.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));