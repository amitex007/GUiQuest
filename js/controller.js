var questSearch = angular.module('QuestSearch',[]);

questSearch.controller('QueryListControl', function($scope,$http)
{
	
	$http.get('json/quer.json').success(function(data) {
    $scope.queryList = data;
  });
});





