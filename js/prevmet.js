// Previ
$( document ).ready(function() {
    $( ".panel-content" ).css( "display", "none" );
  $( ".panel-body button" ).click(function() {
    $( this ).css({
      borderStyle: "inset",
      cursor: "wait"
    });

    current_panel = $(this).parents('.panel-main').children('.panel-content');
    $( current_panel ).slideDown( 1000, function() {

      // $( this )
      //   .css( "border", "2px red inset" )
      //   .filter( ".middle" )
      //     .css( "background", "yellow" )
      //     .focus();

    });
  });


});
