console.log("svg-file-connect");

// 1. creating a simple svg canvas
// d3.select(".svgbox").append("svg").attr("width", 500).attr("height", 500);


// 2. then store the data in the variable
 var svg = d3.select(".svgbox").append("svg").attr("width", 500).attr("height", 500);



// 3. binding the data
// var dataset = [ 5, 10, 15, 20, 25 ];
// svg.selectAll("circle").data(dataset).enter().append("circle");


// 4. store this in another variable so that method chaining doesn't become too long
var dataset = [ 5, 10, 15, 20, 25 ];

var circles = svg.selectAll("circle").data(dataset).enter().append("circle");


circles.attr("cx", function(d, i) {
  return i * 50 //each circles will shift on x axis
}).attr("cy", 100).attr("r", function(d) {
  return d; //
}).attr("fill", "yellow")
