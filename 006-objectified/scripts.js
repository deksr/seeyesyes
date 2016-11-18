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





