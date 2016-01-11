'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $state) {
  var ref = new Firebase(FURL);
  var auth = $firebaseAuth(ref);

  var Auth = {
    user: {},

    createProfile: function(uid, user){
      var profile = {
        name: user.name,
        email: user.email,
        gravatar: 'TBD'

      }

      return ref.child('profile').child(uid).set(profile);

    },

    login: function(user){
      console.log("we got to login function");
      return auth.$authWithPassword({
        email: user.email,
        password: user.password

      });
    },

    register: function(user){
      console.log("we got to register function");
      return auth.$createUser({
        email: user.email,
        password: user.password
      }).then(function(){
        console.log("user is saving");
        return Auth.login(user);
      }).then(function(data){
        console.log('the user is ', data);
        return Auth.createProfile(data.uid, user);

      })
    },

    logout: function(){
      auth.$unauth();
    }

  }

  auth.$onAuth(function(authData){
    if(authData){
      Auth.user = authData;
      console.log('the user has already logged in');
      $state.go('tab.dash');
    } else {
      $state.go('login');

    }
  })
  return Auth;

})
