(function () {

    "use strict";

    angular.module('directive001', [])

        .controller('Controller001', ['$scope', function ($scope) {

            $scope.types = [
                {
                    name: "Component or widget",
                    description: "Separate template"
                },
                {
                    name: "Decorator",
                    description: "Attribute that modifies a current HTML element"
                },
                {
                    name: "Structural",
                    description: "Modifies the DOM"
                }
            ];

        }])

        .directive('directive001', function () {

            return {
                restrict: 'E',
                templateUrl: 'directives/directive001/directive001.tpl.html'
            }

        })





}());