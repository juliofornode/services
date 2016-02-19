(function () {

    "use strict";

    angular.module('httpService', [])

        .factory('book', ['$http', function ($http) {

            return {
<<<<<<< HEAD:public/app/networkingServices/httpService/httpService.js
                getAll: getAll
=======
                getBook: getBook
>>>>>>> parent of 30aac90... before adding the server side:app/networkingServices/httpService/httpService.js
            };


            function getBook () {

                return $http({
                    method: 'GET',
                    url: 'api/books'
                })
                    .then(getResponse)
                    .catch(getError);

            }

            function getResponse (response) {
                return response.data;
            }

            function getError (error) {
                return $q.reject ("Error: " + response.status);
            }







        }])

        .controller('ControllerHttp', ['$scope', 'book', function ($scope, book) {

            book.getBook ()
                .then (getBookSuccess)
                .catch (getBookError);

            function getBookSuccess (theBook) {
                $scope.libro = theBook.title;
            }

            function getBookError (error) {
                console.log(error);
            }


        }])

}());