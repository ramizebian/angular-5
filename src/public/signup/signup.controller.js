(function() {
'use strict';

angular.module('public')
.controller('SignupController', SignupController)
.value('userInfo', {});

SignupController.$inject = ['MenuService', 'userInfo'];
function SignupController(MenuService, userInfo) {
  var signup = this;

  signup.submit = function () {
    MenuService.getShortName(signup.user.favorite)
    .then(function (response) {
      angular.extend(userInfo, signup.user);
      userInfo.menuItem = response.data;
      userInfo.registered = signup.complete = true;
    })
    .catch(function (error) {
      signup.dishNotFound = true;
    });
  };

}

})();