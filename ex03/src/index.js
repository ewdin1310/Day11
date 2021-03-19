
    var myPetsArray = ["Dog", "Cat"];
    

    //Only change code below this line
    
    //Only change code adove this line
    function myArrayFunction(arr) {
        var myNewPets = [...arr];
        myNewPets.push("Bird", "Fish");
        myNewPets.pop("Fish");
        myNewPets.shift("Dog");
        myNewPets.unshift("Lion");
        console.log(myNewPets);
}


    console.log(myArrayFunction(myPetsArray));
    module.exports = myArrayFunction;
