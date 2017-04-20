angular.module("wzry",['ui.router','angularCSS','homeModule','matchModule','videoModule','strategyModule'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
})