//var tableData = data;
/*
YOUR CODE HERE!
Notes:

read json
forEach command to append list 


div class is form-group
ul class is list-group
class is form-control  id is datetime

button id is filter-btn

Object.entries(filt_md[0]).forEach(([key, value]) => {
    metadata.append("p").text(key +" : "+value);
    //metadata.append("p").text('${key}:${value}');




*/
// Read json

    var tableData = data;
    //var columns = ["datetime", "city", "state", "country", "shape", "comments"];
    //console.log(columns);
    console.log(tableData);
    var tbody = d3.select("tbody");

function Createtable () {
    
    tableData.forEach((view) => {
        var addrow = tbody.append("tr")
        Object.entries(view).forEach(([key, value])=> {
            var cell = addrow.append("td");
            cell.text(value);

        });
        //console.log(row)
    
    console.log(tableData);
    
    }); };
//console.log(row)
//Filter for the search
Createtable();
//var form = d3.select("form");
//var button = d3.select("#filter-btn");



var button = d3.select("#filter-btn");

button.on("click", function(buttonclick) {
    d3.event.preventDefault();
    tbody.html("");

    var inputElement = d3.select("#datetime"); 
    var inputValue = inputElement.property("value");
    console.log(inputElement);
    console.log(inputValue);


    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    filteredData.forEach(function(pickdate){
        var row=tbody.append("tr");
        Object.entries(pickdate).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);
        });
    });
});

var resetbutton = d3.select("#reset-btn");
resetbutton.on("click",function(){
    tbody.html("");
    Createtable();
});


