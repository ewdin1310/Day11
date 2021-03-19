var myArr = [2, 4, 0, 8, 10];
console.log(myArr);

    //Only change code below this line
    
    //Only change code adove this line
    function myArrayFunction(arr) {
        var myItems = [...arr];
        myItems[2] = 6
        console.log(myItems);
}

    console.log(myArrayFunction(myArr));
    module.exports = myArrayFunction;
