$(document).ready(function () {


  var currentTime = (moment().format("HH"));
  console.log(currentTime);

  $("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));
  

  for (var i = 8; i < 19; i++) {
    $("#time-" + i).val(localStorage.getItem(i));
  }

  // function that's comparing time of block to current time to determine color (past, present, and future)
  $(".form-control").each(function() {
    var time = $(this).attr("data-time");

    // console.log(time);
    // console.log(currentTime);

    if (time < currentTime) {
      $(this).addClass("past");
    } 
    else if (time > currentTime) {
      $(this).addClass("future");
    } 
    else {
      $(this).addClass("present");
    }
  });
  

  // Add to local storage
  $(".saveBtn").on("click", function() {
    var time = $(this).attr("data-time");

    var value = $("#time-" + time).val();

    localStorage.setItem(time, value);

  })


})