console.log("connect");

d3.select("body").append("p").text("new paragraph")

// can also be written like this
var body = d3.select("body");
var p = body.append("p");
p.text("newparagraph")

