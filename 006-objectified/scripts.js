console.log("connected")

//////////object literal////
// *****************************

var topList = {
	one: "Knox Brown - No slaves",
	two: "Darkstar - Empress of Reformer",
	three: "LIL, WIZ, ID- Sucker For pain"
}

var empty = [];

for (var prop in topList) {
  console.log(prop + " : " + topList[prop]);
  console.log(topList.one);
  empty.push(topList[prop])
  console.log(empty);
}

// way of iterating through objects
var songs = [
{ albumName: "babe", track: "you are my sweetheart" },
{ albumName: "world", track: "we all live here" },
{ albumName: "pencil", track: "use this sharpner" }
]

songs.map(function(eachone){
	console.log(eachone.track)
})


// functions can also return object literal 
var someFunction = function(id, name){
	console.log({
		id: id,
		name: name
	})
}

someFunction(1, 'girl')// created an object






//////////object constructor////
// *****************************


function newTrack(name, year, album, geners){
	this.artistname  = name
	this.albumyear  = year
	this.songalbum  = album
	this.songgeners  = geners
}

var popArtistOne = new newTrack("Rihanna", 2016, "Anti", "pop");
console.log(popArtistOne )
console.log(popArtistOne.artistname)



////// to check if two objects have same property name ////// 
// *****************************
//http://stackoverflow.com/questions/41133898/how-to-check-if-two-objects-properties-match/41134463#41134463


var objectOne = {
  boy: "John",
  girl: "annie"
}


var objectTwo = {
  boy: "andrew",
  girl: "mary",
  dog: "max"
}


var emptyarray = []
for (var propname in objectTwo ) {
  console.log(propname + " = " + objectTwo [propname]);
	
	// if objecttwo has property value mary then
  if (objectTwo [propname]=== "mary"){
  	console.log(propname);

    // loop through objectone and find out if object two's propname === objectone prop name. the pull the value out 
  	if(Object.hasOwnProperty.call(objectTwo, propname)){
  		emptyarray.push(objectOne[propname])

  	}
  
  }
}

console.log(emptyarray)












