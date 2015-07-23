/**
 * Created by janasiegle on 7/23/2015.
 */

var myLP = angular.module("myLP", ['ui.router']);

myLP.config(function($routeProvider) {
    //noinspection ChainedFunctionCallJS
    $routeProvider
        
        .when('/', {
                templateUrl : 'home.html',                
            })
        .when('/viewCompany', {
            templateUrl: 'company.html',
            controller: 'CompanyController'
        })
        .when('/viewSolution', {
            templateUrl:  'solutions.html',
            controller:  'SolutionController'
        })
        .when('/viewActivism', {
            templateUrl: 'activism.html',
            controller: 'ActivismController'
        })
        .when('/viewGallery', {
            templateUrl: 'gallery.html',
            controller: 'GalleryController'
        })
        .when('/viewContact', {
            templateUrl: 'contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home.html'
        });
})
