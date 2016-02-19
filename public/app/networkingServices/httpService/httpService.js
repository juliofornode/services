(function () {

    "use strict";

    angular.module('httpService', [])

        .factory('book', ['$http', function ($http) {

            return {
                getAll: getAll,
                getOneById: getOneById,
                updateOne: putUpdateOne
            };

            function getAll () {
                return $http({
                    method: 'GET',
                    url: 'api/books'
                })
                    .then(getResponse)
                    .catch(getError);

            }

            function getOneById (bookId) {
                return $http({
                    method: 'GET',
                    url: 'api/books/' + bookId
                })
                    .then(getResponse)
                    .catch(getError);
            }

            function putUpdateOne (book) {
                return $http({
                    method: 'PUT',
                    url: 'api/books/' + book.book_id,
                    data: book
                })
                    .then(getUpdateResponse)
                    .catch(getError);
            }

            function getResponse (response) {
                return response.data;
            }

            function getUpdateResponse (response) {
                return "Updated:" + response.config.data.title;
            }

            function getError (error) {
                return $q.reject ("Error: " + response.status);
            }


        }])

        .controller('ControllerGetAll', ['$scope', 'book', function ($scope, book) {

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

        .controller('ControllerUpdateOne', ['$scope', 'book', '$stateParams', '$location', function ($scope, book, $stateParams, $location) {

            book.getOneById($stateParams.bookId)
                .then(getOneByIdSuccess)
                .catch(getOneByIdError);

            function getOneByIdSuccess (libro) {
                $scope.libro = libro;
            }

            function getOneByIdError (error) {
                $log(error);
            }

            $scope.saveBook = function () {
                book.putUpdateOne($scope.libro)
                    .then(saveSuccess)
                    .catch(saveError);
            };

            function saveSuccess (libro) {
                console.log(libro, " updated");
                $location.path('getAll');
            }

            function saveError (error) {
                console.log(error);
            }



        }])

}());