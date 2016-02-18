$(document).ready(function() {
  
  var bodyClone = $('#content').clone();

  var include = function(replacedId, url) {
    $(replacedId).finish();
    $(replacedId).fadeOut( function() {
      console.log(replacedId);
      console.log(url);
      $.get(url,function(data) {
        $(replacedId).html(data);
      });
    $(replacedId).fadeIn( function() {
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
      $('#body').html(bodyClone);
    });
    return false;
  });

  $('#hamburger').click( function() {
    $('#nav').fadeIn("slow", function() {
      $('#nav').toggle();
    });
  });
});
