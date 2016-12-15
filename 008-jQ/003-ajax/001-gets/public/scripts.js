console.log("scripts added")


$( document ).ready(function() {
  console.log("ready!");


  $('.someform').submit(function(event) {
  	 // e.preventDefault();
  	console.log("submitted");
  	var justname = $(".firstname").val();
  	var justage = $(".age").val();

		$.ajax({
			type: "POST",
			// url: "/jupitorsmoon",
			url: "data.json",
			dataType: 'JSON',
			data: {
				'Name' : justname,
				'Age' : justage
			}
		})
		.done(function(data) {
      console.log(data) 
    })
    event.preventDefault()
  });


  // $.ajax({
		// type: "GET",
		// url: "data.json",
		// dataType: 'json',
		// success: function(data){
  //     console.log(data.employees)
  //   }
  // });
});
