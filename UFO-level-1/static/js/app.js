// Read json

    var tableData = data;
    console.log(tableData);
    var tbody = d3.select("tbody");
// Create Createtable function
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

// Call create table function
Createtable();

//Filter for the search

// Create button
var button = d3.select("#filter-btn");

// Action when the filter button is clicked
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

// Ceate resetbutton & reset the chart
var resetbutton = d3.select("#reset-btn");
resetbutton.on("click",function(){
    tbody.html("");
    Createtable();
});