$(document).ready(function() {
  
  var bodyClone = $('#body').clone();

  var include = function(replacedId, url) {
    $(replacedId).finish();
    $(replacedId).fadeOut( function() {});
    $(replacedId).fadeIn( function() {
      console.log(replacedId);
      console.log(url);
      $.get(url,function(data) {
        $(replacedId).html(data);
      });
    });
  };

  $('#link-fatecore').click(function(){
    include('#body','./fatecore.html');
    return false;
  });

  $('#link-storygen').click(function(){
    include('#body','./storygen.html');
    return false;
  });

  $('#link-about').click(function(){
    $('#body').finish();
    $('#body').fadeOut( function() {} );
    $('#body').fadeIn( function() {
      $('#body').replaceWith(bodyClone);
    });
    return false;
  });

  $('#hamburger').click( function() {
    $('#nav').fadeIn("slow", function() {
      $('#nav').toggle();
    });
  });
});
