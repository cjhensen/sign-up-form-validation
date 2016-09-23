var SignupForm = (function() {

  var form = {};

  var formInputs = document.getElementsByTagName('input');

  var addAnimationClass = function() {
    this.previousElementSibling.classList.add('animate-label');
  };

  var removeAnimationClass = function(inputElement) {
    if (this.value === "") {
      this.previousElementSibling.classList.remove('animate-label');
    }
  };

  for (var i = 0; i < formInputs.length-1; i++) {
    formInputs[i].addEventListener("focus", addAnimationClass);
    formInputs[i].addEventListener("blur", removeAnimationClass);
  }

  return form;

})();