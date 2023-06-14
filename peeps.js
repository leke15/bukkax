$(function () {
    $("#yes").on("click", function () {
        $("#yes").fadeOut(1000);
        $("#no").fadeOut(1000)
        $(".hidden").css({display : "block"}).fadeIn(1000);
      });
    });
