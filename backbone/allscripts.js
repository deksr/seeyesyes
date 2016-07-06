// router
var router = Backbone.Router.extend({
	routes: {
	  '': 'home',
	},
	initialize: function(){
		
  },
	home: function(){
    this.homeView = new homeView
    this.homeView.render()
  }
})


// view
var homeView = Backbone.View.extend({
 	el: 'body',
  template: _.template('Hello there'),
  render: function(){
    this.$el.html(this.template({}))
  }
})

var app
$(document).ready(function(){
  app = new router
  Backbone.history.start()
})




