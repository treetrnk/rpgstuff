$(document).ready(function() {
  
  $('#body').load('about.html');

  var include = function(replacedId, url) {
    jQuery.get(url,function(data) {
      $(replacedId).replaceWith(data);
    });
  };

  $('#link-fatecore').click(function(){
    include('#body','fatecore/index.html');
    return false;
  });

  $('#link-storygen').click(function(){
    include('#body','storygen/index.html');
    return false;
  });

  $('#link-about').click(function(){
    include('#body','about.html');
    return false;
  });

});
