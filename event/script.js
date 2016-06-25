console.log("connected")
document.getElementById("taylor").addEventListener("click", hiddelton)

function hiddelton(){
	console.log("I got picked by taylor on her jet");

	var div = document.createElement('div');
  div.setAttribute('id', 'just-an-id')
  document.body.appendChild(div);
  
  document.getElementById("just-an-id").innerHTML="Hidd: mom meet my girlfriend Taylor"
}