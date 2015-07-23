/**
 * Created by janasiegle on 7/23/2015.
 */

var myLP = angular.module("myLP", ['ui.router']);

myLP.config(function($stateProvider, $urlRouterProvider) {
    //noinspection ChainedFunctionCallJS
    $stateProvider
        
        .state('company', {
          url: '/company',          
          templateUrl: 'company.html'
        })
        .state('solution', {
            url: '/solution',            
            templateUrl: 'solutions.html'
        }) 
        .state('activism',{
            url: '/activism',            
            templateUrl: 'activism.html'
        })
        .state('gallery', {
            url: '/gallery',            
            templateUrl: 'gallery.html'
        })
        .state('contact',{
            url: '/contact',            
            templateUrl: 'contact.html'
        })  
        //.otherwise({
            //redirectTo: '/home.html'
        //});

})
