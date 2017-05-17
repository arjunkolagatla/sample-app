'use strict';

/**
 * @ngdoc function
 * @name sampleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleAppApp
 */
angular.module('sampleAppApp')
 .controller('MainCtrl', ['$scope', function ($scope) {

    //onclick of button
    $scope.checkTraingle = function () {
      $scope.triangleType = checkTriangleType($scope.inputs.side1, $scope.inputs.side2, $scope.inputs.side3);
    }

    var checkTriangleType = function (s1, s2, s3) {
      return (s1 + s2 < s3 || s1 + s3 < s2 || s2 + s3 < s1) && 'not a triangle' || (s1 === s2 && s2 === s3) && 'Equilateral' ||
        (s1 === s2 || s1 === s3 || s2 === s3) && 'isosceles' ||
        'scalene';
    }

  }]);