(function () {

    "use strict";

    angular.module('httpService', [])

        .factory('book', ['$http', function ($http) {

            return {
                getAll: getAll
            };


            function getAll () {

                return $http({
                    method: 'GET',
                    url: 'api/books'
                })
                    .then(getAllResponse)
                    .catch(getAllError);

            }

            function getAllResponse (response) {
                return response.data;
            }

            function getAllError (error) {
                return $q.reject ("Error: " + response.status);
            }








        }])

        .controller('ControllerHttp', ['$scope', 'book', function ($scope, book) {

            book.getAll ()
                .then (getAllSuccess)
                .catch (getAllError);

            function getAllSuccess (theBooks) {
                $scope.libros = theBooks;
            }

            function getAllError (error) {
                console.log(error);
            }


        }])

}());