console.log("JS");

var app = angular.module('test',[]);
  app.controller('control', ["$scope", "$http",function($scope, $http){
    console.log("angular loaded");



      $scope.roll = function(num){
        var x = parseInt((Math.random() * num) + 1);
        return x;
      };
      $scope.dAll = function(){
        $scope.d(20);
        $scope.d(12);
        $scope.d(10);
        $scope.d(8);
        $scope.d(6);
        $scope.d(4);
      };
      $scope.display = function (roll, die, van, mes){
        var y = angular.element( document.querySelector( '#roll' + die ) );
        if (roll == die){
          console.log("CRIT");
          y.removeClass("fail");
          y.addClass("crit");
        }else if (roll == 1){
          console.log("FAIL");
          y.removeClass("crit");
          y.addClass("fail");
        }else{
          y.removeClass("crit");
          y.removeClass("fail");
        }
        var funk = ("roll" + die);
        var town = ("van" + die);
        var take = ("advo" + die);
        $scope[funk] = roll;
        $scope[town] = van;
        $scope[take] = mes;
      };

      $scope.d = (function(num){
        console.log($scope.adv);
        if ($scope.adv == 0){
          console.log("Advantage");
          var first = $scope.roll(num);
          var second = $scope.roll(num);
          console.log("first:", first);
          console.log("second:", second);
          if (first >= second){
          $scope.display(first, num, second, "Lower roll");
        }else if (first < second ){
          $scope.display(second, num, first, "Lower roll");
          }
        } else if ($scope.adv == 1){
          console.log("Disadvantage");
          var first = $scope.roll(num);
          var second = $scope.roll(num);
          console.log("first:", first);
          console.log("second:", second);
          if (first >= second){
          $scope.display(second, num, first, "Higher roll");
        }else if (first < second ){
          $scope.display(first, num, second, "Higher roll");
          }
        } else {
          console.log('No vantage');
          var first = $scope.roll(num);
          $scope.display(first, num, "", "");
        }

      });

  }]);
