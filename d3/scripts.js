console.log("connect");

// $( document ).ready(function() {
//     console.log( "ready!" );
//     $( ".bg" ).append( '<p> abmnasbmabnsmbsa <?p>' );
// });

/////////////////////////////////////////////////////////////////

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

// disection of style method: style();
// style ("color", "red") is equivalent to writing a style tag witin an element. like this 
// <style = "color = red">



// correction: added div with container class in the html. 
// appending div elements with bargraph class to the container div. 
// adding the style method to each data
var dataset = [ 5, 10, 15, 20, 56 ];
d3.select(".container").selectAll("div").data(dataset).enter().append("div").attr("class", "bargraph").style("height", function(d){
	// return d + 'px';
	// with just return d + 'px'; - the rendered graph is a small bargraph we can manipulate how it looks without touching the data by manipulating how big it should be displayed.
	var manipulateHeight = d * 5;
	return manipulateHeight + 'px';
})

// .style("margin-right", "2px" ) added this in style sheet





