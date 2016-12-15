console.log("hello there")

$( document ).ready(function() {
  console.log("ready!");

  $('.someform').submit(function(event) {
  	 // e.preventDefault();
  	console.log("submitted");

    ///////////
  	var frm = $('.someform');
  	console.log(frm.serialize());

		$.ajax({
			type: "POST",
			url: "/jupitorsmoon",
			dataType: 'JSON',
			data: frm.serialize()
		})
		.success(function (data) {
      console.log('ok');
    })
		.done(function(data) {
      console.log(data) 
      console.log("yo ho")
    })
    event.preventDefault()
  });

});


////method two of capturing data
// $('.someform').submit(function(event) {
//   	 // e.preventDefault();
//   	console.log("submitted");
//   	var justname = $(".firstname").val();
//   	var justage = $(".age").val();
//     console.log(justage)

// 		$.ajax({
// 			type: "POST",
// 			url: "/jupitorsmoon",
// 			dataType: 'JSON',
// 			data: {
// 				'Name' : justname,
// 				'Age' : justage
// 			}
// 		})
// 		.done(function(data) {
//       console.log(data) 
//     })
//     event.preventDefault()
//   });



// method three of sending data to the server
  // $('.someform').submit(function(event) {
  //   // e.preventDefault();
  // 	console.log("submitted");

  //   var data = {
  //     data: "My name is",
  //     name: "Slim Shady"
  //   };

  //   stringifiedData = JSON.stringify(data);

		// $.ajax({
		// 	type: "POST",
		// 	url: "/jupitorsmoon",
		// 	dataType: 'JSON',
		// 	// data: JSON.stringify({ "name": "random object" })
  //     data: stringifiedData
		// })
		// .success(function (data) {
  //      console.log('ok');
  //   })
		// .done(function(data) {
  //     console.log(data) 
  //     console.log("yo ho")
  //   })
  //   event.preventDefault()
  // });



