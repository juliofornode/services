(function () {

    "use strict";

    angular.module('widget001', [])

        .controller('W1Controller', ['$scope', 'book', function ($scope, book) {

            $scope.john = {
                name: "John",
                age: 44,
                sisters: [
                    {
                        name: book.name,
                        age: book.author
                    },
                    {
                        name: "Beth",
                        age: 42
                    },
                    {
                        name: "Lou",
                        age: 40
                    }
                ]
            };

            $scope.mary = {
                name: "Mary",
                age: 45,
                sisters: [
                    {
                        name: "John",
                        age: 44
                    },
                    {
                        name: "Beth",
                        age: 42
                    },
                    {
                        name: "Lou",
                        age: 40
                    }
                ]
            };


        }] )

        .directive('widget001', function () {

            return {

                restrict: "E",

                scope: {
                    user: '=',
                    expand: '@'
                },

                controller: function($scope) {

                    var toBoolean = false;

                    if ($scope.expand === 'true') {
                        toBoolean = true;
                    }

                    $scope.expanded = toBoolean;

                    $scope.toggle = function () {

                        $scope.expanded = !$scope.expanded;

                    };

                    $scope.marked = false;

                    $scope.mark = function () {
                        $scope.marked = !$scope.marked;
                    }

                },

                templateUrl: 'services/providers/widget001/widget001.tpl.html',

            }

        });

}());