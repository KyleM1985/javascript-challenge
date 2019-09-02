// from data.js
var tableData = data;

// YOUR CODE HERE!
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
        var row = tbody.append("tr");
        Object.defineProperties(ufoRecord.forEach(([key, value]) => {
            var cell = row.append("td");
        }));
    });
};