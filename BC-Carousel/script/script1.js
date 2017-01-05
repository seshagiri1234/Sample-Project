$(document).ready(function() {

  var $slider = $('#carousel');
  var $slide = 'li';

  slides().fadeOut();
  slides().first().addClass('active');
  slides().first().fadeIn(1000);

  // auto scroll
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut(1000);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn(500);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  1000
  );
  
  function slides(){
	    return $slider.find($slide);
	  }
});