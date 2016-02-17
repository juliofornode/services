(function () {

   "use strict";

    angular.module('widgetDirectives', [])
        .controller('WDcontroller', ['$scope', function ($scope) {

            $scope.widgets = [

                {
                    name: "Template displaying data",
                    description: "Just a separate template displaying data with ng-repeat",
                    state: 'widget001'
                }


            ];

        }])
        .directive('widgetDirectives', function () {

        })


}())