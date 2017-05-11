var app = angular.module('htmlEditor', ['ui.ace']);
    app.directive("w3TestDirective", function() {
      return {
        restrict : "C",
        template: "<h1>Made by a directive!</h1>"
      };
    });

    // htmlEditor.controller('htmlController', ['$scope', function($scope) {
    //   // $scope.firstName= "John";
    //   // $scope.lastName= "Doe";

    //   $scope.aceLoaded = function(_editor) {
    //     // Options
    //     _editor.setReadOnly(true);
    //   };

    //   $scope.aceChanged = function(e) {
    //     //
    //   };

    // }]);
