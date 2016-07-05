console.log("transition connect")

d3.select("body").selectAll("p").data([5,4,3,2,1]).enter().append("p").text(function(d,i) { return " Hello - " + d; });
// d3.selectAll("p").transition().style("color","blue");

d3.selectAll("p").transition().style("color","green").duration(1000);


// or use delay()
// d3.selectAll("p").transition().delay(2000).style("font-size","8px");

d3.selectAll("p").transition().style("font-size","7px").delay(function(d,i){
    return d * 1000;
});
