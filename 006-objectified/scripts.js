console.log("connected")

//////////object literal////

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

//////////object constructor////

function newTrack(name, year, album, geners){
	this.artistname  = name
	this.albumyear  = year
	this.songalbum  = album
	this.songgeners  = geners
}

var popArtistOne = new newTrack("Rihanna", 2016, "Anti", "pop");
console.log(popArtistOne )
console.log(popArtistOne.artistname)


