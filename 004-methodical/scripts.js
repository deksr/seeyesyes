var throwbacks = ["claptone: in the begining", "wilco - how to fight lonliness", "disclouser: you and me", "designer: panda", "bibi bourelly: sally"]

var newstuff = {
	name: "red hot chilli peppers: dark necessities", 
	name: "Mont Jake: this goes on", 
	name: "devin lee: ride slow"}

var numbers = [1, 2, 3, 4, 5, 6, 7]



////////////////////////////////////////////////
// methods that modifies original array. Comment each out after execution

   // pops last one
   console.log(throwbacks.pop())

   // reverse the elements in array
   console.log(throwbacks.reverse())

   // returns first element
   console.log(throwbacks.shift())

   // retuns the number of elements after an item has been added
   console.log(throwbacks.unshift("rihanna : better have my money"));

   // sorts an array in alphabetical order
   console.log(throwbacks.sort()); 

   // splices an array, take two arguments
   console.log(throwbacks.splice(1, 2));



////////////////////////////////////////////////
// methods that doesnt modify original array. 

   // joins two arrays
   console.log(throwbacks.concat(numbers))

   // joins all elements into one string
   console.log(throwbacks.join(""))

    // accepts two arguments: (1) start and (2) end
   console.log(throwbacks.slice(1,2));


/////////////////////////
// other useful methods

		// works best for numbers///
		function numbersort(value){
			if (value > 5){
				return value
			}
		}
		console.log(numbers.filter(numbersort))



		// works best for arrays and objects///
		function findwilco (value){
			return value == "wilco - how to fight lonliness"
				// return value.name == value
		}
		console.log(throwbacks.find(findwilco))




// simple loop with pop example 

  var allArrays = [['a', 'b'], ['c'], ['d', 'e', 'f']]
  var emptarry = [];

  for(var j = 0; j < allArrays.length; j++) {
     // console.log("first" + " "+  allArrays[j].pop());
     emptarry.push(allArrays[j].pop())
     console.log(emptarry)
}



