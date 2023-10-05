$(function () {
$("#menuItems").click(function () {
    if (cardTitle.css("display") == "block") {
      cardTitle.slideUp();
 //It didn't not work as planned still working on it
    } else {
      $(".cardTitle").slideDown().css({ backgroundColor: "white" });
      
      $(".card").each(function () {
        $(this).on('click' , function(){
            window.location.href="ourFood.html";
        })
      });
    }
  });
});
