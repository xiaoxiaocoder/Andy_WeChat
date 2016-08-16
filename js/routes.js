angular.module('wechat.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('tab',{
        url:'/tab',
        abstract:true,
        templateUrl:'templates/tabs.html'
    })
        .state('tab.message',{
        url:'/message',
        views:{
            'tab-message':{
                templateUrl:'templates/tab-message.html',
                controller:'messageCtrl'
            }
        }
    })
    .state('tab.contact',{
        url:'/contact',
        views:{
            'tab-contact':{
                templateUrl:'templates/tab-contacts.html',
                controller:'contactCtrl'
            }
        }
    })
    .state('tab.discover',{
        url:'/discover',
        views:{
            'tab-discover':{
                templateUrl:'templates/tab-discover.html',
                controller:'discoverCtrl'
            }
        }
    })
    .state('tab.me-setting',{
        url:'/me-settig',
        views:{
            'tab-me':{
                templateUrl:'templates/tab-me.html',
                controller:'meCtrl'
            }
        }
    })

    .state('messageDetail', {
            url: '/messageDetail/:messageId',
            templateUrl: "templates/message-detail.html",
            controller: "messageDetailCtrl"
    });
       ;


    $urlRouterProvider.otherwise("/tab/message");
});