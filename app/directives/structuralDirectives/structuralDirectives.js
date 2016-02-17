(function () {

    "use strict";

    angular.module('structuralDirectives', [])
        .controller('SDcontroller', ['$scope', function ($scope) {

            $scope.structurals = [

                {
                    name: "Basic example using the transclude function",
                    description: "We use transclude: 'element' and the transclude function " +
                    "inside it, we use element.after(cloneOfTranscluded) to replicate what " +
                    "ng-transclude does.",
                    state: 'structural001'
                },
                {
                    name: "Lazy rendering",
                    description: "Render code only if required.",
                    state: 'structural002'
                }


            ];

        }])
        .directive('structuralDirectives', function () {

        })


}())