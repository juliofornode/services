(function () {

    "use strict";

    angular.module('transclusion001', [])
        .controller('ControllerTransclusion001', ['$scope', function ($scope) {

        }])
        .directive('transclusion001', function () {

            return {

                restrict: 'A',
                transclude: true,
                template: '<ng-transclude/><p>This is transcluded</p>'

            }

        })


}());