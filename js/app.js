//Ionic Starter App

angular.module('wechat',['ionic','wechat.routes','wechat.controllers'])
	//,'wechat.services','wechat.directives'])

//http://ngionic.com/2014/12/ionic-javascript-api-ionicconfigprovider/
//? $ionicConfigProvider 
//http://bbs.phonegap100.com/thread-1495-1-1.html $ionicConfigProvider-ionic 中默认安装后tap导航在顶部
.config(['$ionicConfigProvider',function($ionicConfigProvider){
	//Ionic会自动根据当前平台来调整使用什么样的过渡方式，或是图标应该显示在顶部或底部等等。
	//这些配置可以用 $ionicConfigProvider 在你的APP运行配置中。另外，在app内部和正在运行时 $ionicConfigc也可以设置和获取配置信息
	//set the position of tab. the default value of top in android devices and bottom in ios. 
	$ionicConfigProvider.tabs.position('bottom');
}])

//run 程序加载完成后会运行一次
.run(function($ionicPlatform,$http){//,messageService,dateService){
	var url="";
	if(ionic.Platform.isAndroid()){ //inside function
		url="/android_asset/www";
	}

	/*$http.get(url+'data/json/messages.json')
		.then(function(response){
			//messageService.init(response.data.message);
			console.log(response.data.messages);
		});
	$http.get(url+'data/json/friends.json').then(function(response){
		console.log(response.data.results);
	});
*/
	$ionicPlatform.ready(function(){
		//Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
		if(window.cordova && window.cordova.plugs.Keyboard){
			cordova.plugs.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar){
			StautsBar.styleDefault();
		}
	});
})