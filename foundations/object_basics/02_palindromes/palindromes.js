const INVALID = [',', ' ', '!', '.', '?']

const palindromes = function (string) {
    // Clean the sring for comparision
    let stringClean = string.toLowerCase()
    for (let invalidCharacter of INVALID) {
        stringClean = stringClean.replaceAll(invalidCharacter, '');   
    }

    let stringCleanInverse = (Array.from(stringClean).reverse()).join('');

    if (stringClean === stringCleanInverse) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
