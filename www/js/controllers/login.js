'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth){
  $scope.emailLogin = function(){
    console.log('button was clicked on login');

    $scope.user = {};
    console.log('showing popup');

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'templates/partials/login.html',
      title: 'Signin',
      scope: $scope,
      buttons: [
        {
          text: '<b>Login</b>',
          type: 'button-energized',
          onTap: function(user) {
            user = $scope.user;
            console.log('logon user is', user);
            // log user in
            Auth.login(user).then(function(){
              console.log('user was logged in successfully');
              // redirect to dashboard
              $state.go('tab.dash')
            });
          }

        },

        {
          text: '<b>Register</b>',
          type: 'button-calm',
          onTap: function(user) {
            user = $scope.user;
            console.log('register user is', user);
            // register user
            Auth.register(user).then(function(){
              console.log('user was registered successfully');
              // redirect to dashboard
              $state.go('tab.dash')
            });
          }
        }
      ]
    });
  }
});
