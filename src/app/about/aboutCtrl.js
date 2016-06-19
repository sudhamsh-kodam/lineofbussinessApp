(function () {
  "use strict";
  angular
    .module('lineofbussinessApp')
    .controller('aboutCtrl',  ["$scope",
      function  aboutCtrl($scope) {
      $scope.test = "testing";
        var vm = this;
        vm.showImage =false;
        vm.toggleImage = function () {
          vm.showImage = !vm.showImage;
        };
        vm.products = [
          {" productId " : 1,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 12,
            "imageUrl" : "http://lorempixel.com/100/100/nature"
          },
          {" productId " : 2,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 14,
            "imageUrl" : "http://lorempixel.com/100/100/fashion"
          },
          {" productId " : 3,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 17,
            "imageUrl" : "http://lorempixel.com/100/100/sports/1"
          },
          {" productId " : 4,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 12,
            "imageUrl" : "http://lorempixel.com/100/100/sports"
          },
          {" productId " : 1,
            "productName" : "Leaf Rake",
            "productCode" : "GDN-0011",
            "releaseDate" : "March 19, 2016",
            "Description": "Leaf rake with 48 inch handle",
            "price" : 10,
            "imageUrl" : "http://lorempixel.com/100/100/nightlife"
          }
        ]
    }]);
}());
