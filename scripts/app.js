'use strict';

/**
 * @ngdoc overview
 * @name ngArchApp
 * @description
 * # ngArchApp
 *
 * Main module of the application.
 */
angular
  .module('ngArchApp', [
    'ui.router'
  ])
  .config(function($stateProvider,$locationProvider){
    $stateProvider
    .state('main',{
      url:'^/main',
      templateUrl: 'scripts/views/main.html',
      controller: 'mainCtrl'
    })
    .state('about',{
      url:'^/about',
      templateUrl: 'scripts/views/about.html',
      controller: 'AboutCtrl'
    });
$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  });
  

