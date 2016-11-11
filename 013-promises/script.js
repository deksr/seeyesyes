console.log("javascript loaded");
// promises are replacement to callbacks. See 010-advanced js


//*********
// basic syntax:
// var promise = new Promise(function(resolve, reject){

//   var workdone = true; //or false;

//   if (true){
//   	resolve('write yippee')	
//   }
//   else{
//   	reject('write oh no!')
//   }
// });

// promise.then(function(fromResolve){
//   console.log(fromResolve + " in my list ") 
// }).catch(function(fromReject){
//   console.log(fromReject + " in my list ")
// })
//*********


//// better practicle example
var firstWork = function(){
	return new Promise(function(resolve, reject){
  resolve('First Work Done');
 })
}



var secondWork = function(){
	return new Promise(function(resolve, reject){
  resolve('Second Work Done');
 })
}


var thirdWork = function(){
	return new Promise(function(resolve, reject){
  resolve('Third Work Done'); 
 })
}


firstWork().then(function(firstWorkResult){
	console.log(firstWorkResult)
	return secondWork() //make sure to return the next function 
}).then(function(secondWorkResult){
	console.log(secondWorkResult)
	return thirdWork() //make sure to return the next function
}).then(function(thirdWorkResult){
	console.log(thirdWorkResult)
})




