# A Walk-thru of JavaScript's `this`

## What is `this`?

- `this` is a keyword in JavaScript that most of the time points to "context" object, but can be `undefined` in certain circumstances.

- The object `this` is set to (by a process called "binding") may be:
	-  The "global" object: The `Window`/`global` object in a browser/Node; or...
	-  Any other JS object according to the rules of binding `this`.

- You saw something like `this` in Ruby, the `self` keyword; although JavaScript's `this` behaves a little differently.

## Why does `this` exist?

Two reasons:

1. Provide a way for methods (functions assigned to object properties) to access the other properties within that object:

	```js
	var person = {
		firstName: 'Katie',
		intro: function() {
			console.log(`Hello, I'm ${this.firstName}!`);
		}
	};
	```

2. Efficiency via code reuse! Imagine a constructor function that constructs sprites for a game:

	```js
	function Sprite(color, pos) {
	  this.color = color;
	  this.pos = pos;
	  // this.move = function(direction) {...
	  // this.rotate = function(direction) {...
	  // this.accelerate = function() {...
	  // this.checkCollision = function() {...
	}
	```
	There may be tens, hundreds, even thousands of sprites; and if so, as written above, each sprite will have it's own copy of every method - the code for the functions will be duplicated over and over again...
	
	The `this` keyword provides for a single copy of each function instead:
	
	```js
	function Sprite(color, pos) {
	  this.color = color;
	  this.pos = pos;
	  this.move = move;
	  ...
	}
		
	function move(direction) {
	  switch (direction.toUpperCase()) {
	  	case 'R':
	    	this.pos.x < 999 ? this.pos.x++ : this.pos.x = 0;
	      break;
	    case 'D':
	    ...
	  }
	}
	```
	An even better approach would be to attach the functions to the constructor's prototype so that derived types will also have access:
	
	```js
	function Sprite(color, pos) {
	  this.color = color;
	  this.pos = pos;
	}
		
	Sprite.prototype.move = function(direction) {
	  switch (direction.toUpperCase()) {
	    ...
	}
	```
	Notice the additional side-benefit of not have to define a property for the `move` method in the constructor!

## Examples of Implicit `this` Binding

>`this` is set implicitly **at runtime** when a function is called. `this` does not depend on how a function is written, but how it is called.

#### Non-method Functions

- When called as a simple, _non-method_ function (not attached to an object):

	```js
	function thisCheck() { console.log(this); }
	thisCheck();  // Window {...} or 
	```
	or in the case when _strict mode_ is set:
	
	```js
	'use strict';
	function thisCheck() { console.log(this); }
	thisCheck();  // undefined
	```

#### Methods

- Now let's call this very same function as a method (assigned to a property of an object:

	```js
	var ninja = {
		name: 'Zumorito',
		f: thisCheck
	};
	function thisCheck() { console.log(this); }
	ninja.f();  // Object {name: "Zumorito"}
	```
	So, the rule of thumb is, the object left of the dot is the context object `this` is bound to!
	
	No dot?  `this` is the `Window` object (the `global` object in Node) because that's where the function is being executed.

#### Constructor Functions
	
- `this` in a constructor function is set to the new shiny object that is implicitly returned.

- See the _Sprite_ constructor function above for an example.

#### Asynchronous Callback Functions

- You just learned that when a function is called as a non-method, `this` is bound to `Window` or is `undefined` in _strict mode_.

- Callback functions in asynchronous methods are called as simple functions (non-methods), so guess what `this` will be set to:

	```js
	var ninja = {
	  ninjaName: 'Zumorito',
	  chop: function(numChops) {
	  	setTimeout(function() {
	    	if (numChops > 0) {
	      	console.log(`${this.ninjaName} chop!`);
	        this.chop(--numChops);
	      }
	    }, 500);
	  }
	};
	ninja.chop(2);  //  undefined chop! / then an error
	```
	When the callback executes, it's being called as a free-standing, simple function, thus `this` is bound to the `Window` (or _____ if strict mode is true).

- One way to "fix" the above problem is to set a variable to reference  `this` when it is bound to the object we want it to be bound to:

	```js
	var ninja = {
	  ninjaName: 'Zumorito',
	  chop: function(numChops) {
	  	var _this = this;
	  	setTimeout(function() {
	    	if (numChops > 0) {
	      	console.log(`${_this.ninjaName} chop!`);
	        _this.chop(--numChops);
	      }
	    }, 500);
	  }
	};
	ninja.chop(2);  // Zumorito chop! (two times)
	```

- Other ways to fix the async callback issue is by _explicitly_ setting the binding of `this` with the `call`, `apply` and `bind` methods available on non-arrow functions.

- The newest solution however is to take advantage of the _lexical_ binding of `this` in arrow functions...

## Arrow functions

- When executed in the global context (outside of a function), an arrow function is always the global object (`Window` in browser; `global` in node):

	```js
	var foo = () => console.log(this);
	foo();  // Window {...}
	```

- Unlike how `this` is set according to how it's called, `this` in an _arrow function_ is set to the context of its enclosing function. For example, the following code demonstrates that arrow functions still bind to the global context when used as methods on an object:

	```js
	var obj = {
		foo: () => console.log(this)
	}
	obj.foo();  // Window {...}
	```
	This is because there is not enclosing function like the following:
		
	```js
	var obj = {
		foo: function() {
	  	var logThis = () => console.log(this);
	    logThis();
	  }
	}
	obj.foo();  // Object {...}
	```

- Okay, looks like an arrow function would have taken care of our ninja chop problem:

	```js
	var ninja = {
	  ninjaName: 'Zumorito',
	  chop: function(numChops) {
	    setTimeout(() => {
	      if (numChops > 0) {
	        console.log(`${this.ninjaName} chop!`);
	        this.chop(--numChops);
	      }
	    }, 500);
	  }
	};
	ninja.chop(2);  // Zumorito chop! (two times)
	```

- The value of `this` within an arrow function cannot be set or changed using `call`, `apply` or `bind`.

## Event Listeners

- An anonymous function used as an event listener like this:

	```js
	var myDiv = document.getElementById('my-div');
	myDiv.addEventListener('click', function() {
		console.log(this);
	});
	// <div id="my-div">...
	
	```
	Will have `this` bound to the element.
	
## Best Advice

If you need to know what context object `this` is going to be bound to in a given scenario, my best advice would be to write some quick code like we've done here and test it out!