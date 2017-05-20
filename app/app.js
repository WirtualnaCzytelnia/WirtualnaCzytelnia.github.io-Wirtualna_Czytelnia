var app = angular.module('library', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider    // tworzymy nasze routy - strony, przypisując im odpowiedni plik html oraz kontroller, a także resolve, czy akcje, które mają się uruchomić przed wejściem w ten route
    .when('/', {
        templateUrl : './app/templates/main.html',  // plik html
        controller: angular.noop  // brak kontrolera dla tej strony
    })
    .when('/books', {
        templateUrl : 'app/templates/books.html', // plik html
        controller: 'BooksController',  // Nazwa kontrolera, który używany będzie na tej stronie
        controllerAs: 'books',  // Nazwa kontrolera, która dostępna będzie w widoku, pliku html
        resolve: {
          books: ['api', function (api) {
            return api.getBooks();  // pobieramy książki z api
          }]
        }

    })
    .otherwise({
        redirectTo: '/' // jeśli nie weszliśmy na żaden z zadeklarowanych linków, wracamy na stronę główną
    });
}]);
