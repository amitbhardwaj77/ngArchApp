'use strict';

/**
 * @ngdoc function
 * @name ngArchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngArchApp
 */
angular.module('ngArchApp')
  .controller('loginController', function ($state) {

  	var self = this;
    self.lastname = 'bundela';

    self.navigateToMain = function(){
    	$state.go('main');
    };
  });
