console.log("hello there");

// getElementById, getElementsByClassName, getAttribute, setAttribute, createElement, appendChild, querySelector, querySelectorAll, innerHTML, innerHTML

// get elements, classnames and id
var theScots = document.getElementById("scots")
var theWelsh = document.getElementsByClassName("welsh")
var theEnglish = document.getElementsByTagName("p")
var thenorthern=document.getElementsByName("nireland")


// get and set attributes
var theScots = document.getElementById("scots").getAttribute("href")
var theScots = document.getElementById("scots").setAttribute("href", "www.referendum.com")// see on the elements in dev console


// attaching elem to doms
var div = document.createElement('div');
var para = document.createElement('p');
div.appendChild(para);
document.body.appendChild(div);


// changing texts
var changeArtist = document.body.querySelector('.first-artist');
changeArtist.innerHTML = "Barry White";


// changing texts
var newArtists = document.body.querySelectorAll('li')[0];
newArtists.innerText= "Taylor Swift";


// adding li to ul
var bestSongs = document.createElement('ul');
var lists = document.createElement('li');
bestSongs.appendChild(lists)
document.body.appendChild(bestSongs);


// adding id
var createDiv = document.createElement('div');
var onMyMind = document.querySelector(".onmymind");
onMyMind.setAttribute('id', 'you-got-me')

var onMyMind = document.querySelector(".onmymind");
onMyMind.innerText= "Kanye West - bam"


var names = ["John", "Mary"]
var inpuT = document.querySelectorAll(".inpu");


for (var i = 0; i < inpuT.length; i++) {
  for (var i = 0; i < names.length; i++) {
  	if(names[i] === inpuT[i].getAttribute("value")){
  		// console.log("hello");
  		inpuT[i].setAttribute("checked", "checked") 
  	}
  };

};















