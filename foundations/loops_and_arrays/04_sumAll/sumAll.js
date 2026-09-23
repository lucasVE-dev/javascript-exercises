const sumAll = function(num1,num2) {
    
    // First need to determine that numbers are positive integers
    
    if (!checkNumbersValidity(num1) || !checkNumbersValidity(num2)){
        return 'ERROR';
    }

    // Secondly need to determine which number is smaller to start the loop
    startingNumber = num1;
    finishingNumber = num2;

    if (num1 > num2){
        startingNumber = num2;
        finishingNumber = num1;
    }

    let sumOfAllNumbers = 0;
    for (startingNumber;startingNumber <= finishingNumber ; startingNumber++){
        sumOfAllNumbers = sumOfAllNumbers + startingNumber;
    }

    return sumOfAllNumbers;
};

function checkNumbersValidity(num) {

    if (Array.isArray(num)){
        return false;
    }

    if (!Number.isInteger(num)){
        return false;
    }

    if (num < 0){
        return false;
    }

    if (typeof num === 'string'){
        return false;
    }

    return true;
};


// Do not edit below this line
module.exports = sumAll;
