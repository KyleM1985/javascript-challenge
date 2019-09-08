// from data.js
var tableData = data;

// function to display UFO sightings
console.log(tableData);

// select tbody Html element
var tbody = d3.select("tbody");

// send data from data.js to console.log
console.log(data);

tableData.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    
    var cell = row.append("td");
    cell.text(value);
  });
});

// reference to button with id set to 'filter-btn'
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
    
  //create variables for user input
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  
  // filter data based on user input
  var rows = d3.select('tbody').selectAll('tr')
  rows.remove()

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
  var tbody = d3.select("tbody");
  filteredData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
      
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
        
      var cell = row.append("td");
      cell.text(value);
      });
    });
  

  console.log(filteredData);
  
});