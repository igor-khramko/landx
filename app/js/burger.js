$(document).ready(function() {
  var i = "burger";
  $(".nav__burger").click(function() {
    "close" == i
      ? ($(".nav__list").slideUp(),
        $(".nav__burger").toggleClass("active"),
        
        (i = "burger"))
      : "burger" == i &&
        ($(".nav__list").slideDown(),
        $(".nav__burger").toggleClass("active"),
        $(".nav__list").css("width", "100%"),
        (i = "close"));
  });
});
