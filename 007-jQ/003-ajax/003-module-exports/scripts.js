
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// var exports = module.exports = {};


// how Philly taught us
// module.exports = {
//   "fatalities": [
//     "2015-05-1",
//     "2013-6-13"
//   ]
// }



module.exports = {
	sayHelloInEnglish: function() {
    console.log("Hello");
  },

  sayHelloInSpanish: function() {
    return "Hola";
  }
}