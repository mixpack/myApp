'use strict';

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $rootScope) {
  $scope.chat = Chats.get($stateParams.chatId);
});