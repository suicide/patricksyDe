/**
 * handle resizes and change the picture
 */
$(document).ready(function() {

  var theWindow = $(window);
  var image = $('#portrait');

  function checkWidth() {
    var windowSize = theWindow.width();
    // why??
    if (windowSize > 752) {
      image.attr('src', 'img/psy_the_face_200.jpg');
    } else {
      image.attr('src', 'img/psy_the_face_small.jpg');
    }
  }

  checkWidth();
  theWindow.resize(checkWidth);
});
