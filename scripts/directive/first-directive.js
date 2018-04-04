'use strict';

angular.module('ngArchApp').directive('firstDirective',function(){
	return{
		restrict:'EA',
		scope: {
	      customerInfo: '=lastname'
	    },
		templateUrl:'scripts/views/first-directive.html'
	};
});