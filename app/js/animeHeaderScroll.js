var $page = $('html, body');
var header = $('header');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $("header").outerHeight()
    }, 600);
    return false;
});