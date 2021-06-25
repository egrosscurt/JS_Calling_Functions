//Hey Kiddo
const checkAge = function (age) {
    if (age >= 18) {
        return true;
    }
    else{
    return false;
    }
  }; 

const greeting = function (age) {
    if (checkAge(age)) {
        return"Hello there";
    }
    else {
        return "Hey Kiddo";
    }
  };

  console.log(greeting(21));
  console.log(greeting(16));



//VAT Calculation 1
  const calculateVatAmount = function(basePrice, vatPercentage){
    return basePrice*(vatPercentage/100);
};

  const calculateTotalprice = function(basePrice, vatPercentage){
    const vatAmount = calculateVatAmount(basePrice, vatPercentage);
    return basePrice + vatAmount;
}


console.log(calculateTotalprice(100,21));
console.log(calculateTotalprice(10,9));


//VAT Calculation 2
const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));
  
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