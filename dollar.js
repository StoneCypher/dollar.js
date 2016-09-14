var $ = function(s) {
  var elm = document.querySelectorAll(s);
  return (elm.length > 1) ? elm : document.querySelector(s);
}