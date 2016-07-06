console.log("script added")

//constructor
var Todo = Backbone.Model.extend({
	initialize: function(){
    console.log('This model has been initialized.');
    this.on('change', function(){
        console.log('- Values for this model have changed.');
    });//listens for any change in the model and displays it
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



var TodoView = Backbone.View.extend({

  tagName:  'li',
  todoTpl: _.template( "An example template" ),
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
  },
  initialize: function (options) {
    // In Backbone 1.1.0, if you want to access passed options in
    // your view, you will need to save them as follows:
    this.options = options || {};
  },
  render: function() {
    this.$el.html( this.todoTpl( this.model.attributes ) );
    this.input = this.$('.edit');
    return this;
  },
  edit: function() {
    // executed when todo label is double clicked
  },

  close: function() {
    // executed when todo loses focus
  },
  updateOnEnter: function( e ) {
    // executed on each keypress when in todo edit mode,
    // but we'll wait for enter to get in action
  }

})

var todoView = new TodoView();
console.log(todoView.el);


