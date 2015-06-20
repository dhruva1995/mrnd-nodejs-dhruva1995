
exports.Sum = function (num1, num2) {
    return Number(num1) + Number(num2);
}

exports.SumOfArray = function (arrayOfNums) {
    var i;
    var sum = 0;
    for (i = 0; i < arrayOfNums.length; i++)
        sum += arrayOfNums[i];
    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums) {
   
    var sit=0
    var run=0;
    var sum = 0;
    for (sit = 0; sit < arrayOfNums.length; sit++)
    {
        for (run = 0; run < sit; run++)
        {
            if (arrayOfNums[sit] == arrayOfNums[run])
                break;
        }
        if (run == sit)
            sum +=arrayOfNums[sit];
        
    }
    console.log(sum)
    return sum;
}

exports.ReverseString = function(str){
    var result = ""
    var index = 0
    for(index = str.length - 1;index >= 0;index--)
    {
        result+= str[index];
       
    }
    return result;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){


}