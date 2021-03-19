
    var monitorsListArray = ["Apple", "Peach", "Berry"];
    

    //Only change code below this line
    
    //Only change code adove this line
    function myMonitorFunction(arr) {
        var monitorsList = [...arr];
        monitorsList[0] = ["Apple", 1]
        monitorsList[1] = ["Peach", 2]
        monitorsList[2] = ["Berry", 3]
        console.log(monitorsList);
        var monitorsList = [];
        console.log(monitorsList);
}


    console.log(myMonitorFunction(monitorsListArray));
    module.exports = myMonitorFunction;
