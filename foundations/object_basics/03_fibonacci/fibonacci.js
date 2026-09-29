const fibonacci = function(num) {
    number = Number(num);
    
    if(number < 0){
        return "OOPS"
    }else if(number <1){
        return 0;
    }

    const fibonacci = [1,1];

    for (let i=2; i<= number+1; i++){
        fibonacci[i] = fibonacci[i-2]+fibonacci[i-1]
    }

    return fibonacci[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
