(function () {

    "use strict";

    angular.module('decorator001', [])

        .controller('ControllerDecorator001', ['$scope', function($scope) {
            $scope.mySize = 200;
        }])

        .directive('decorator001', function() {
            return {
                restrict: 'A',
                link: function (scope, element, attributes) {

                    scope.$watch(attributes.decorator001, function(newValue) {

                        element.css('font-size', newValue + '%');

                    })


                }
            }
        })

}())