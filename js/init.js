(function($){
  $(function(){
    $('.sidenav').sidenav({
      draggable:true
    });
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
    $('#carousel').carousel({dist:50});
    $('#mobcarousel').carousel({dist:150});
    $('#mycarasoul').carousel({padding:200});
    $(document).ready(function(){
      $('.materialboxed').materialbox({
        onOpenStart : clearCarosoulTimeout,
        onCloseEnd : autoplay
      });
    });
    $('textarea#textarea2').characterCounter();
    autoplay();
    var tim;
    var clearCarosoulTimeout = ()=> clearTimeout(tim);
    function autoplay() {
      $('#mycarasoul').carousel('next');
      tim = setTimeout(autoplay, 4000);     
      }
  }); // end of document ready
})(jQuery); // end of jQuery name space
