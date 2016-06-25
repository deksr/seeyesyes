console.log("connected")

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
