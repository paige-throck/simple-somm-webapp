(function() {
 'use strict';

 angular.module('app').config(config)

 config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

 function config($stateProvider, $urlRouterProvider, $locationProvider){

   $locationProvider.html5Mode(true)

   $stateProvider
     .state({
       name: 'home',
       url: '/',
       component: 'homepage',
     })
     .state({
       name: 'login',
       url: '/login',
       component: 'login',
     })
     .state({
       name: 'signup',
       url: '/signup',
       component: 'signup',
     })
     .state({
       name: 'profile',
       url: '/profiles/:param',
       component: 'profile',
     })

 }

}());
