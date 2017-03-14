var dashboard = angular.module('frenzy_web', ['ui.router','firebase']);
//,'ngMaterial', 'ngMessages', 'material.svgAssetsCache'
dashboard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/LoginAndRegister");

  $stateProvider
    // Login And Register View
    .state('LoginAndRegister', {
      url: "/LoginAndRegister",
      views: {
        '': {
          templateUrl: "templates/LoginAndRegister/loginAndRegister.html",
          controller: "loginCtrl"
        }
      }
    })
});
