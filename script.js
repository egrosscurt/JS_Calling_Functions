//Hey Kiddo
/*const checkAge = function (age) {
    if (age >= 18) {
        return true;
    }
    else{
    return false;
    }
  }; 

const greeting = function (age) {
    checkAge(age);
    if true {
        console.log("Hello there")
    }
    else {
        console.log("Hey Kiddo");
    }
  };

  greeting(21);
*/

  //VAT Calculations
  const calculateVatAmount = function(basePrice, vatPercentage){
    const vatAmount = basePrice*(vatPercentage/100);
    console.log(vatAmount);
};

  const calculateTotalprice = function(basePrice, vatAmount){
    const totalPrice = basePrice + vatAmount;
    console.log(totalPrice);
}


calculateTotalprice(100,21);


  
  /*makeNoise();


  //Return values
  const add = function(numberA, numberB) {
    return numberA + numberB;
};

// The add function returns to this line, which is outside of a function.
const eight = add(3, 5);
console.log(eight);

const doCalculation = function() {
    // The add function returns to this line, which is inside of a function.
    const six = add(2, 4);
    console.log(six);
};

doCalculation(); 


//Debugging
const makePositive = function(number) {
    console.log("Entering makePositive..");
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
};

const makeBigger = function(number) {
    console.log("Entering makeBigger..");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function(number) {
    console.log("Entering square..");
    return number * number;
};

const doComplexCalculation = function(number) {
    console.log("Entering doComplexCalculation..");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));*/