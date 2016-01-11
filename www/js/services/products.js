'use strict';

app.factory('Products', function(FURL, $firebaseArray, Auth) {
  var ref = new Firebase(FURL);
  var products = $firebaseArray(ref.child('products'));

  var Products = {
    all: function(){
      return products;
    },


    saveProduct: function(product, image){
      console.log('the seller is ', Auth.user.profile);
      var newProduct = {
        seller_name: Auth.user.profile.name,
        seller_image: Auth.user.profile.gravatar,
        name: product.name,
        tagline: product.tagline,
        description: product.description,
        price: product.price,
        image: image
      };
      return products.$add(newProduct).then(function(){
        console.log('new product added to the database');
      })
    }

  };
  return Products;

});