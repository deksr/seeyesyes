console.log("traverse-connect");

$( document ).ready(function() {
  console.log( "ready!" );
  // $( "div" ).children().first().css( "color", "red");
  $( "li" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });
});