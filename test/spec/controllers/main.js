
'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(module('ngArchApp'));

  var MainCtrl,
    $rootScope, $scope, $controller;
 
  beforeEach(inject(function ($injector) {

      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $controller = $injector.get('$controller');
      MainCtrl = $controller('mainCtrl', {
        '$scope': $scope
      });
    }));

 it('should have called createRow', function () {
      MainCtrl.showCreate = false;
      MainCtrl.createRow();
      expect(MainCtrl.showCreate).to.equals(true);
    });

 it('should have called addRow', function () {
      MainCtrl.showCreate = true;
      MainCtrl.addRow();
      expect(MainCtrl.showCreate).to.equals(false);
    });

}); 
 
