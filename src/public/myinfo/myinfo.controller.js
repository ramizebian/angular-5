(function() {
'use strict';

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['userInfo']
function MyinfoController(userInfo) {
  var info = this;
  console.info(userInfo);
  info.userData = userInfo;
}
})();