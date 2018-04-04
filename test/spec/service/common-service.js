'use strict';

describe('Service: commonService', function () {
  beforeEach(module('ngArchApp'));

  var $rootScope, commonService;
 
   beforeEach(inject(function (_$rootScope_,_commonService_) {
      commonService = _commonService_;
      $rootScope=_$rootScope_;
    }));

    afterEach(function () {
      $rootScope=null;
      commonService=null;
    });


 it('should have commonService defined', function () {
      expect(angular.isDefined(commonService))
        .to.be.true;
  });

}); 