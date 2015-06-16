describe('QueryListControl', function(){

  beforeEach(module('QuestSearch'));

  it('should create "queryList" model with 2 queryList', inject(function($controller) {
    var scope = {},
        ctrl = $controller('QueryListControl', {$scope:scope});

    expect(scope.queryList.length).toBe(3);
  }));

});