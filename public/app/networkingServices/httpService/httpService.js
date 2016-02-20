(function () {

    "use strict";

    angular.module('httpService', [])

        .factory('book', ['$http', function ($http) {

            return {
                getAll: getAll,
                getOneById: getOneById,
                putUpdateOne: putUpdateOne,
                createOne: createOne,
                deleteOne: deleteOne
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

            function createOne (newBook) {
                return $http({
                    method: 'POST',
                    url: 'api/books',
                    data: newBook
                })
                    .then(createOneResponse)
                    .catch(getError)
            }

            function deleteOne (bookId) {
                return $http({
                    method: 'DELETE',
                    url: 'api/books/' + bookId
                })
                    .then(deleteOneResponse)
                    .catch(getError);
            }

            function getResponse (response) {
                return response.data;
            }

            function getUpdateResponse (response) {
                return "Updated:" + response.config.data.title;
            }

            function createOneResponse (response) {
                return "Created:" + response.config.data.title;
            }

            function deleteOneResponse (response) {
                console.log("deleted");
            }

            function getError (error) {
                return $q.reject ("Error: " + response.status);
            }


        }])

        .controller('ControllerGetAll', ['$scope', 'book', '$stateParams', '$state', function ($scope, book, $stateParams, $state) {

            book.getAll ()
                .then (getAllSuccess)
                .catch (getAllError);

            function getAllSuccess (theBooks) {
                $scope.libros = theBooks;
            }

            function getAllError (error) {
                console.log(error);
            }

            $scope.deleteOne = function (bookId) {
                book.deleteOne(bookId)
                    .then(deleteSuccess)
                    .catch(deleteError)
            };

            function deleteSuccess (response) {
                console.log('deleted');
                $state.go($state.current, {}, {reload: true});
            }

            function deleteError (error) {
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

        .controller('ControllerCreateOne', ['$scope', 'book', '$location', function ($scope, book, $location) {

            $scope.newBook = {};

            $scope.createOne = function () {
                book.createOne($scope.newBook)
                    .then(createSuccess)
                    .catch(createError);
            };

            function createSuccess (response) {
                console.log(response);
                $location.path('getAll');
            }

            function createError (error) {
                console.log(error);
            }

        }])

}());