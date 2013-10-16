(function ( $ ) {
  $.fn.enableButton = function ( options ) {
    var $form = $(this);
    var $required = $form.find(".required");
    var $button = $form.find('input[type="submit"]');

    var update = function () {
      if ( validate() ) {
        $button.removeAttr("disabled");
      } else {
        $button.attr("disabled", "disabled")
      };
    };
    
    var validate = function () {
      var number = 0;
      var validNumber = $required.length;
      
      $required.each(function ( i, field ) {
        if ( $(field).val().trim() ) {
          number += 1;
        } else {
          return false;
        };
      });
      
      if ( number === validNumber ) {
        return true;
      };
    }
    
    $form.on("keyup", ".required", function (ev) {
      // console.log(ev.keyCode);
      update();
    });
  };
  
}( jQuery ));