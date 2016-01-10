'use strict';

app.controller('DashCtrl', function($scope, Products) {
  $scope.products = Products.all();
  console.log('all products', $scope.products);
});