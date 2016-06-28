console.log("connect")

///////////to get dates
var now = new Date();
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getFullYear())
console.log(now.getMinutes())


///////////to set dates
var d = new Date(2009, 7, 24, 14, 52, 10);
d.setDate(12);
console.log(d)

var date = new Date("12/15/1990");
date.setDate(30);
console.log(date)




////// set timeout sets a time
////// clear time out, will help you clear the time that you had set. 
// some simple examples of how to settime functions

		function patSummit (){
			function shesays (){
				console.log("there are times you can win a game by the margin of a single good thought or positive word or an action- Pat Summit")
			}
			setTimeout(shesays, 2000)
		}

		patSummit();

		//////////////////////

		var hawaii = function somefunction(){
		  console.log("marooned island")
		}
		hawaii();

	  //////////////////////


		var rome = setTimeout(function(){
			console.log("I have a special visitor today: taylor and hidd")
		}, 3000)

		//////////////////////


		var amber = setTimeout(perfectlyPreserved, 4000)
		function perfectlyPreserved (){
				console.log("i have clearTimeout on me(see below), so I'll never be called to join the party. check you console, if you don't believe.")
		}


    /////// to stop the timeout use clearTimeout 

    clearTimeout(amber)


////////////// setinterval///////////////

		function myFunction() {
		  setInterval(function(){ alert("the chorus"); }, 4000);
		}

		// myFunction() 

		////////// 
		var year = setInterval(seasons, 4000)
			function seasons(){
			  console.log("The only season needed is an endless Summer.")
		}

		/////// to stop the timeout use clearTimeout 

		clearInterval(year)






