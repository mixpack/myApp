angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Hwang Yoon Seok',
    lastText: 'I\'m on my way babe. Nearly there.',
    face: 'img/hwanhee.jpg'
  }, {
    id: 1,
    name: 'Brian Joo',
    lastText: 'Hey, it\'s me.',
    face: 'img/brian.jpg'
  }, {
    id: 2,
    name: 'So Ji Sub',
    lastText: 'I should buy a boat',
    face: 'img/jisub.png'
  }, {
    id: 3,
    name: 'Joo Sang Wook',
    lastText: 'Look at my mukluks!',
    face: 'img/sangwook.jpg'
  }, {
    id: 4,
    name: 'Kim Soo Hyun',
    lastText: 'This is wicked good ice cream.',
    face: 'img/soohyun.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Products', function(FURL, $firebaseArray) {
  var ref = new Firebase(FURL);
  var products = $firebaseArray(ref.child('products'));

  var Products = {
    saveProduct: function(product, image){
      var newProduct = {
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

