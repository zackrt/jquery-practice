function nameReply ()
{
  //added class "submit" to button
$(".submit").click(function (event)
  {
  event.preventDefault();
  //set this text input val to variable?
  var x = $("#name-entry").val();
  //don't forget the $ in front of {x}
  $(".results").html(`"Hi, ${x}, nice to meet you!"`);
  }
)}
$(nameReply);