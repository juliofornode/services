(function () {

   "use strict";

    angular.module('widgetDirectives', [])

        .provider('book', function () {

                this.$get = function () {

                    var name = "El Quijote";
                    var author = "Miguel de Cervantes";
                    var version = "1.0";

                    if (includeVersionInTitle) {
                        name = name + " " + version;
                    }

                    return {
                        name: name,
                        author: author
                    }

                };

                var includeVersionInTitle = false;

                this.setIncludeVersionInTitle = function (value) {
                    includeVersionInTitle = value;
                }
        })

        .config(function (bookProvider) {

            bookProvider.setIncludeVersionInTitle(true);

        })


        .controller('WDcontroller', ['$scope', 'book', function ($scope, book) {

            $scope.widgets = [

                {
                    name: book.name,
                    description: book.author,
                    state: 'widget001'
                }


            ];

        }])
        .directive('widgetDirectives', function () {

        })


}())