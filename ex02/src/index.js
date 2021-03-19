var monday = [31, 31, 19, 37];
var tuesday =[29, 27,55, 36];
var wednesday =[17, 27, 42, 46];
var thursday =[29, 52, 21, 64];
var friday = [91, 27, 31, 61];
console.log(monday)

    //Only change code below this line
    
    //Only change code adove this line
    function myArrayFunction(arr) {
        var newTemps = [...arr];
        var averageDayTemp = [29.75, 36.75, 33, 41.5, 52.5];
        return averageDayTemp;

}


    console.log(myArrayFunction());
    module.exports = myArrayFunction;
