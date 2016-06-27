console.log("connect")


$( document ).ready(function() {
  console.log( "document loaded" );
  for (var i = 0; i < cool.length; i++) {
		console.log(cool[i])
	  $("ul").append('<li>' + cool[i] + '</li>');
  }
 

  ////
  $( "li" ).each(function( index ) {
    console.log( "hello" );
	});
})




	
