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


//if the oject sent is undefined and have to assign to variables then ....
// ***************
var mj = function(x, y, z) {
    var xName = x && x.name;
    var yName = y && y.name; 
    var zName = z && z.name;
}
mj({name: "mo"})



// ***************multi dimensional array looping

var loophole = [[{name: "brad", age: 23}], [{name: "andy", age: 24}]]
for (var i = 0; i < loophole.length; i++) {
  var multidime =  loophole[i];
  for (var j = 0; j < multidime.length; j++) {
    console.log(multidime[j]) 
  };
};



// this loops at intervals
 // window.setInterval(  function(){
 //      var list =["a", "b", "c"]
 //      for (var i = 0; i < list.length; i++) {
 //        console.log(list[i])
 //      };
 //    }, 1000)


 // make clones  var clone = myArray.slice(0);

 // empty an array

var arrayOne = ["a", "b", "c"];
console.log(arrayOne.splice(0, arrayOne.length))
console.log(arrayOne)


// arrays breakdown:
var arrayUrl = [' https:ahs','https:asjja']


for (var i = 0; i < arrayUrl.length; i++) {
  console.log(arrayUrl[i])
};


arrayUrl.forEach(function(e){
  console.log('bla' + e)
})



// check if two arrays have same elements
var news1 = ["after that, she was", "z" ,"b"]
var news2 = ["after that, she was", "z", "b"]

console.log(news1.sort())

if(news1.sort().join() === news2.sort().join()){
console.log("same array")
}
else{
  console.log("different")
}


// to check if two arrays are same with timer
// window.setInterval(  function(){
//   var news1 = ["aftr that, she was", "z" ,"b"]
//   var news2 = ["after that, she was", "z", "b"]

//   if(news1.sort().join() === news2.sort().join()){
//     return;
//   }
//   else{
//     console.log("news1")
//   }
// }, 6000)



var someobj =[{a: "j"}, {a: "k"}]
console.log(someobj)
for (var i = 0; i < someobj.length; i++) {
  console.log(someobj[i])
};







