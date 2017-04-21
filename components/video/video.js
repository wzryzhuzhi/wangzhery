angular.module('videoModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('video',{
			url:'/video',
			templateUrl:'components/video/video.html',
			controller:'videoControl',
			css:'components/video/video.css'
		});
})
<<<<<<< HEAD
.controller('videoControl',['$scope','$http',function($scope,$http){
	console.log('ss');
		$http.get('components/video/json/轮播.json').success(function(res){
			$scope.arr=res.msg.reclist_236;
		});
}]);
=======
.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:500,
		    pagination: '.swiper-pagination',  
		 }) 
	},50);
}])
.controller('videoControl',['$scope','$http','swiper',function($scope,$http){
		$http.get('components/video/json/轮播.json').success(function(res){
			$scope.arr=res.msg.reclist_236;	
		});
		$http.get('components/video/json/赛事.json').success(function(res){
			$scope.arr1=res.msg.result;	
		});

}]);
    
>>>>>>> cd2e9e3c458b219ee6b4be8501dc523118c43fc5
