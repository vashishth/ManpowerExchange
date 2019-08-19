$('.scrollcustom').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1000);
});


$('.scrollcustomSlow').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 2500);
});

// function removeLocationHash(){
//     var noHashURL = window.location.href.replace(/#.*$/, '');
//     window.history.replaceState('', document.title, noHashURL)
// }
// window.addEventListener("popstate", function(event){
//     removeLocationHash();
// });
// window.addEventListener("hashchange", function(event){
//     event.preventDefault();
//     removeLocationHash();
// });
// window.addEventListener("load", function(){
//     removeLocationHash();
// });