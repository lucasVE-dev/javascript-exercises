const removeFromArray = function(array,...valuesToBeRemoved) {
    for (let valueToBeRemoved of valuesToBeRemoved){
        array = array.filter( value => value !== valueToBeRemoved)
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
