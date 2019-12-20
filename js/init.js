(function($){
  $(function(){

    $('.sidenav').sidenav({
      draggable:true
    });
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
    $('#carousel').carousel({dist:50});
    $('#mobcarousel').carousel({dist:150});
    $('#mycarasoul').carousel({
      //dist: -100,
      //autoplay: true,
      //numVisible:4,
      padding:200,
      //fullWidth:true
    });
    $('#mobileWhoWeAre').click((e)=>{
      e.preventDefault();
      console.log("Hello");
    });
    $(document).ready(function(){
      $('.materialboxed').materialbox({
        onOpenStart : clearCarosoulTimeout,
        onCloseEnd : autoplay
      });
    });

    $(document).ready(function() {
      $('textarea#textarea2').characterCounter();
    });
    //$('#mycarasoul').carousel({
     // padding: 0,
     // numVisible:6    
      //});
  autoplay();
  var tim;
  var clearCarosoulTimeout = ()=> clearTimeout(tim);
  function autoplay() {
      $('#mycarasoul').carousel('next');
      tim = setTimeout(autoplay, 4000); 
          
      }
  }); // end of document ready
})(jQuery); // end of jQuery name space
