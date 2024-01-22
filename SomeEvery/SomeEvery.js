// Some

function hasOddNumber(arr){
    return arr.some(function(value){
        return value % 2 !== 0;
    });
}

function hasAZero(number){
    return number.toString().split('').some(function(value){
        return value === '0';
    });
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(value){
        return value % 2 !== 0; 
    });
}

function hasNoDuplicates(arr){
   return arr.every(function(val, index){
    return arr.indexOf(val) === index;  
   });
}

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return val[key];
    });
}

function hasCertainValue(arr, key, value){
    return arr.every(function(obj){
        return obj[key] === value;
    });
}


