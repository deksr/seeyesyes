console.log("script added")

//constructor
var Todo = Backbone.Model.extend({
	initialize: function(){
    console.log('This model has been initialized.');
    this.on('change', function(){
        console.log('- Values for this model have changed.');
    });//listensfor any change in the model and displays it
   //'change:title' listen for changes to individual attributes in a Backbone model
  },
  defaults: {
    title: '',
    completed: false
  } //this sets default values
});


var todo1 = new Todo();
console.log(JSON.stringify(todo1))
console.log(todo1.toJSON());




var todo2 = new Todo({
	title: "code",
});
console.log(JSON.stringify(todo2))
console.log(todo2.toJSON());





var todo3 = new Todo({
	title: "water plants",
	completed: true
});
console.log(JSON.stringify(todo3))
console.log(todo2.toJSON());



// setters and getters
todo3.get('title');
console.log(todo3.get('completed')); 

todo3.set("title", "Title attribute set through Model.set().");


// ******************************




