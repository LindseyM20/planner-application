$(document).ready(function () {

  // Current day/date display
  $("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

  var currentTime = (moment().format("HH"));

  // Fetch from local storage and print saved data on time blocks
  for (var i = 9; i < 19; i++) {
    $("#time-" + i).val(localStorage.getItem(i));
  }

  // This compares time of block to current time to determine color (past, present, or future)
  $(".form-control").each(function() {
    var time = $(this).attr("data-time");

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
