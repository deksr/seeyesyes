console.log("traverse-connect");

$( document ).ready(function() {
  console.log( "ready!" );

  // Interesting life of dom elements
  //////////////////////////////////////

  // tree traversals *****************************
  // children(), parent(), parents(), parentsUntil() siblings(), closest(), find(), next(), nextAll(), nextUntil(), offsetParent(), , prev(), prevAll(), prevUntil()

  $(".music-gene").children().css( "color", "green");

   // selects sibling elements except the specified element $(".jonas"). If two p tags have .jonas then both are selected. They hug and color each other. 
  $(".jonas").siblings().css("color", "red");

   // selects sibling div element if found but doesn't color ".knowls"
  $(".knowls").siblings('div').css("color", "aqua");

    // Immediate catches hold of the element after the "taylor-the-heartless". a clear rebound.
  $(".taylor-the-showoff").next().css("color", "blue");

    // Immediate catches hold of all the elements after itself. Everybody will do attitude.  
  $(".justin-is-resting").nextAll().css("color", "blueviolet ");


   // bear it until a point then `we are done`.  
  $(".giving-chances").nextUntil(".brake-up").css("color", "brown");

 // prev(), prevAll() & prevUntil() Methods do exactlt like the above. Going back in time and reminiscing!


  // manipulations*****************************
  // .each()

  // $( "li" ).each(function( index ) {
  //   console.log( index + ": " + $( this ).text() );
  // });


  // filtering **********************************
  // filter(), first(), has(),is(), last(), map(), slice(),eq()

  $(".riri").has(".music-collaboration").css("background-color", "cyan ");


  $(".single-hits p").first().css("color", "burlywood ");


  $(".will-be-back-soon-guys p").last().css("color", "cadetblue");

  // I have the power to randomly pick who ever i wish in the index.
  $(".song-now-playing").eq(3).css("color", "chartreuse");


  // you can filter the elements 
  $("li").filter(".still-disses").css("background-color", "coral");


  // Miscellaneous **********************************
  // add(), addBack(), andSelf(), contents(), end(), not()

  $(".pals").not(".no-invite").css("background-color", "cornflowerblue ");


  // ****************************************************

  //  $( ".columns" ).find('a').css( "color", "green");
  //  $( ".columns" ).find('a').each(function(index, el) {
  //  	  console.log(el)	
  //  	  var beta = $(this);
  //  	  console.log(beta);

  //  	  var title = beta.text();
  //  	  console.log(title)
  //  });

  //  // console.log($(".box").find('p').text())
  // /////////
  // $(".box").filter(function(index) {
  // 	var data = $(this);
  // 	console.log(data)

  // 	var title = data.children().text();
  // 	console.log(title)

  // 	// return something;
  // });

 });

  // $('div:not(:has(div)) [href*="hello/"]').css( "color", "red");//this works


