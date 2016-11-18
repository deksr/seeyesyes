console.log("hello");



console.log(this); //window object




function there(){
	console.log(this)
}

there()//gives window object




var here = this
console.log(here)//window object




var person = {
  firstName: 'Katie',
  intro: function() {
    console.log(`Hello ${this.firstName}`)
  }
}
console.log(this.person) //points at object





