var SignupForm = (function() {

  var form = {};

  var formInputs = document.getElementsByTagName('input');
  var passwordInput = document.getElementById('password');
  var passwordIndicator = document.getElementsByClassName('passwordIndicator');
  console.log(passwordIndicator);
  var confirmPasswordInput = document.getElementById('confirmPassword');

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

  var checkPasswordLength = function() {
    return passwordInput.value.length > 8;
  };

  var checkPasswordCase = function() {
    var upperCaseChars = /[A-Z]/;
    return upperCaseChars.test(passwordInput.value);

  };

  var checkPasswordNum = function() {
    var nums = /[1-9]/;
    return nums.test(passwordInput.value);
  };

  var checkPasswordSpecialChar = function() {
    var specialChars = /^[a-zA-Z0-9- ]*$/;
    return !specialChars.test(passwordInput.value);
  };

  var isPasswordValid = function() {
    if(checkPasswordLength()) {
      passwordIndicator[0].style.display="inline";
    } else {
      passwordIndicator[0].style.display="none";
    }

    if(checkPasswordCase()) {
      passwordIndicator[1].style.display="inline";
    } else {
      passwordIndicator[1].style.display="none";
    }

    if(checkPasswordNum()) {
      passwordIndicator[2].style.display="inline";
    } else {
      passwordIndicator[2].style.display="none";
    }

    if(checkPasswordSpecialChar()) {
      passwordIndicator[3].style.display="inline";
    } else {
      passwordIndicator[3].style.display="none";
    }
  };

  passwordInput.addEventListener("focus", isPasswordValid);
  passwordInput.addEventListener("keyup", isPasswordValid);

  return form;

})();