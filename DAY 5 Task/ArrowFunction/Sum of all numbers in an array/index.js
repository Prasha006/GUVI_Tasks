var num = [4, 8, 7, 13, 12] 
    let sum = 0; 
    var sum1 = () => {
    for (let i = 0; i < num.length; i++) {
       sum += num[i];
    }
    console.log(sum)
}
    
sum1(); 