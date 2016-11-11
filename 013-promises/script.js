console.log("hello this is promise");


// basic syntax:

var promise = new Promise(function(resolve, reject){

  var workdone = true; //or false;

  if (true){
  	resolve('write yippee')	
  }
  else{
  	reject('write oh no!')
  }
});

promise.then(function(fromResolve){
  console.log(fromResolve + " in my list ") 
}).catch(function(fromReject){
  console.log(fromReject + " in my list ")
})
