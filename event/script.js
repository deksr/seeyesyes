console.log("connected")



////////////addEventListener////

function hiddelton(){
	console.log("I got picked by taylor on her jet");

	var div = document.createElement('div');
  div.setAttribute('id', 'just-an-id')
  document.body.appendChild(div);

  document.getElementById("just-an-id").innerHTML="Hidd: mom meet my girlfriend Taylor"
}

document.getElementById("taylor").addEventListener("click", hiddelton)
///////////////////////////////




// for enter key///////////////
document.getElementById("photograpger-name").addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
    		var photographerName = document.getElementById("photograpger-name").value
    console.log(photographerName)
    if (photographerName=="Bill Cunningham"){
    	console.log("You are missed.")
    }
    else
    {
    	console.log("Take a Hint: Minimalism makes people humble.")
    }
      
    }
})
///////////////////////////////




////////////this  ///////////////
function showArtists(e){

	// Notes///////
  // Always true
  // console.log(this === e.currentTarget);

  // true when currentTarget and target are the same object
  // console.log(this === e.target);
  // this.style.backgroundColor = '#A5D9F3';
  // if (this === e.target) 
  /////////////////

  var forHiphop = document.body.querySelector(".hiphop")
  var forRock = document.body.querySelector(".rock")
  var forPop = document.body.querySelector(".pop")
  var span = document.createElement('span');


  if (this === forHiphop){
  	console.log("hip hop selected");
  	span.innerHTML = "Kendrick Lamar";
    forHiphop.appendChild(span);
  }
  else if(this === forRock){
  	console.log("rock selected");
  	span.innerHTML = "Foo Fighters";
    forRock.appendChild(span);
  }
  else if(this === forPop){
  	console.log("Pop selected")
  	span.innerHTML = "RIRI";
    forPop.appendChild(span);
  }

}

var elem = document.body.querySelectorAll(".all")
console.log(elem)


for (var i=0 ; i<elem.length ; i++) {
  elem[i].addEventListener('click', showArtists, false);
}
///////////////////



