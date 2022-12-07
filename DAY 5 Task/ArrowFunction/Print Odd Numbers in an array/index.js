let allnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let printOdd = () => {
    for (let i=1; i<=allnum.length; i++) {
      if(i % 2 !== 0) {
        console.log([i]); 
      }
    }
  }
printOdd()