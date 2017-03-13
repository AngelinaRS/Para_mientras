dashboard.controller('loginCtrl', function($scope,$firebaseObject,$stateParams) {

  // Show Login
  $scope.showLogin = function() {
    var state = $('#showLogin').data('state');
    state = !state;
    if (state) {
      $("#boxLoginContent").css("display", "flex");

    } else {
      $("#boxLoginContent").css("display", "none");
    }
    $('#showLogin').data('state', state);
    }
}) //End loginCtrl Controller
