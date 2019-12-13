$(document).ready(function() {
  $(".navigation__link").on("click", function() {
    $(".navigation .navigation__checkbox").attr("checked", false);
  });

  $("#up").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });
});
