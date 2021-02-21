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
var columns = ["datetime", "city", "state", "country", "shape", "comments"];
console.log(columns);
console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach((view) => {
    var addrow = tbody.append("tr")
    Object.entries(view).forEach(([key, value])=> {
        var cell = addrow.append("td");
        cell.text(value);

    });
    //console.log(row)
    


});
//console.log(row)
//Filter for the search
var form = d3.select("form");
var button = d3.select("#filter-btn");

//button click - run and add error check(no match) at end
button.on("click", buttonclick);


function buttonclick() {

     d3.event.preventDefault();
    
    
    
     tbody.html("");

   

    









};





