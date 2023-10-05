$(function () {
  alert("I have Loaded!!!");
  $(".btn1").on("click", function () {
    $(".img1").fadeOut(3000);
  });

  $(".btn2").on("click", function () {
    //When animation is in progress it stops it.
    $(".img1").stop();
  });
  $("*").on("click", function (e) {
    /* I found out that this method stops a parent event for passing down to other child elements so it will only select the event for whatever "This" clicked on it
    https://www.w3schools.com/jsref/event_stoppropagation.asp */
    e.stopPropagation();
    //I thought maybe after you see the element fade out you'd wanna still see it so I made it to fade back in after it fades out.
    $(this).fadeOut(1000), $(this).fadeIn(2000);
  });
 
  $("#bukka").click(function () {
    $(this).css({ fontFamily: "Arial" });
  });

  $("#bukka").hover(function () {
    $(this).css({ cursor: "pointer" });
  });
  $(window).on("load", function () {
    $("body").css({ backgroundColor: "wheat" });
  });

  $("#menuItems").click(slides());
}); 
let myInterval = setInterval(slides , 2000);
let cardTitle = $(".cardTitle");

function stopping() {
  clearInterval(myInterval)
}

  function slides() {
    //If cardTitle display class is block slid up else side down and give the cards a background of white
    if (cardTitle.css("display") == "block") {
      myInterval
      cardTitle.slideUp();
      //I tried to give each drop down Item a link to the menu section of the website but i don't know why it's not working
    } else {
      $(".cardTitle")
        .slideDown()
        .css({ backgroundColor: "white", cursor: "pointer" });

      $(".card").each(function () {
        $(this).on("click", function () {
          window.location.href = "ourFood.html";
        });
      });
    }
  }
