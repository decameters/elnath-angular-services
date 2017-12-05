var app = angular.module('CarApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/views/company.html',
        controller: 'CompanyController as vm'
    }).when('/cars', { // method chaining!
        templateUrl: '/views/cars.html',
        controller: 'CarController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});

