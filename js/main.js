$(document).ready(function() {
  
  var bodyClone = $('#body').clone();

  var include = function(replacedId, url) {
    $(replacedId).finish();
    $(replacedId).fadeOut( function() {});
    $(replacedId).fadeIn( function() {
      console.log(replacedId);
      console.log(url);
      $(replacedId).load(url);
    });
  };

  $('#link-fatecore').click(function(){
    include('#body','../fatecore.html');
    return false;
  });

  $('#link-storygen').click(function(){
    include('#body','../storygen.html');
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

});
