console.log("connect");

// d3.select("body").append("p").text("new paragraph")

// can also be written like this
// var body = d3.select("body");
// var p = body.append("p");
// p.text("newparagraph")

/////////binding data///////
// to bind we need the data and a dom element selection with few more d3 methods like .data()... 
// var dataset = [ 5, 10, 15, 20, 56 ];
// d3.select("body").selectAll("p").data(dataset).enter().append("p").text("new paragraph")
// console.log(d3.selectAll("p"));

/////////// displaying data ////////////
// var dataset = [ 5, 10, 15, 20, 56 ];
// d3.select("body").selectAll("p").data(dataset).enter().append("p").text(function(d){
// 	return "number of people in the movie theater " + d;
// });


///////// displaying the css//////////
// var dataset = [ 5, 10, 15, 20, 56 ];
// d3.select("body").selectAll("p").data(dataset).enter().append("p").text(function(d){
// 	return "number of people in the movie theater " + d;
// }).style("color", "red");

// or

// var dataset = [ 5, 10, 15, 20, 56 ];
// d3.select("body").selectAll("p").data(dataset).enter().append("p").text(function(d){
// 	return "number of people in the movie theater " + d;
// }).style("color", function(d) {
//     if (d > 15) {   //Threshold of 15
//         return "red";
//     } else {
//         return "black";
//     }
// });


var dataset = [ 5, 10, 15, 20, 56 ];


