const repeatString = function(str,num) {
    if(num<0){
        return "ERROR";
    }
    let newWord = ""
    for (let i=0; i<num; i++) {
        newWord = newWord + str
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
