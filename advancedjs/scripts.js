// console.log("connect")


// callback functions
var empty = [];

function firstFunction(content){
	if (typeof content === 'string'){
	  console.log("you wrote this in optionOne: " + content)
	}
	else {
		console.log("optionOne was left empty")
	}
}


function secondFunction(){
	console.log("I'm second function called inside the blueprint")
}


function thirdFunction(content){
	if (typeof content === 'string' ){
		console.log("you wrote " + content + " as the optiontwo")
	}
	else {
		console.log("optiontwo was left empty")
	}
}


// this is like a template
// functions can have as many expressions as they want. not nexcessary that 

function bluePrint(optionOne, callback, optiontwo){
	// set of work to be done

	//1.
	empty.push(optionOne)
	console.log( empty)

  //2.
	callback(optionOne)//fodder for another function

  //3.
  secondFunction();

	//4. 
	thirdFunction(optiontwo)
}



// callback is not defined
// callback is not a function
// bluePrint("roof") //
bluePrint("window", firstFunction) //
// bluePrint("door", firstFunction, "window")






