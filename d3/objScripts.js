console.log("obj-scripts attached")
 var svg = d3.select(".svg-obj-box").append("svg").attr("width", 500).attr("height", 500);


 var dataset = [ { key: 0, value: 5 }, { key: 1, value: 10 }, { key: 2, value: 13 }, { key: 3, value: 19 }, { key: 4, value: 21 }, { key: 5, value: 25 }, { key: 6, value: 22 }, { key: 7, value: 18 }, { key: 8, value: 15 }, { key: 9, value: 13 }, { key: 10, value: 11 }, { key: 11, value: 12 }, { key: 12, value: 15 }, { key: 13, value: 20 }, { key: 14, value: 18 }, { key: 15, value: 17 }, { key: 16, value: 16 }, { key: 17, value: 18 }, { key: 18, value: 23 }, { key: 19, value: 25 } ];


 var circles = svg.selectAll("circle").data(dataset).enter().append("circle");


 circles.attr("cx", function(d, i) {
  return i * 50 //each circles will shift on x axis
}).attr("cy", 100).attr("r", function(d) {
  return d.value; //.value gives the "value" of the key value pair
}).attr("fill", "yellow")