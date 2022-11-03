//function taskOne() {
//    console.log("task 1");
//}
//
//function taskTwo() {
//    console.log("task 2");
//}
//
//setTimeout(taskOne, 2000);
//taskTwo();


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);