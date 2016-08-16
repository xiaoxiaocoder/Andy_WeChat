angular.module('wechat.controllers',[])
.controller('messageCtrl',function($scope,$http){
	$scope.$on("$ionicView.beforeEnter", function(){
    });

  	$http.get('data/json/messages.json').then(function(response){
			$scope.messages=response.data.messages;
	});



})
.controller('contactCtrl',function($scope,$http,$state){
	$scope.$on("$ionicView.beforeEnter", function(){
   			//console.log('contact');
    });
	$http.get('data/json/friends.json').then(function(response){
		$scope.contacts=response.data.results;
		
	});
	$scope.onSwipeLeft = function() {
       // $state.go("tab.find");
    };
    $scope.onSwipeRight = function() {
        //$state.go("tab.message");
    };
    $scope.contacts_right_bar_swipe = function(e){
       // console.log(e);
    };
})
.controller('discoverCtrl',function($scope,$state){
    $scope.$on("$ionicView.beforeEnter", function(){
               // console.log('discover');
    });
})
.controller('meCtrl',function($scope,$state){
    $scope.$on("$ionicView.beforeEnter", function(){
               // console.log('me');
        });
})
;