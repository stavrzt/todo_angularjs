

/*ТУТ БУДУЩИЕ РОУТЫ*/

'use strict';

angular.
  module('todoApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/todolist', {
          template: '<main-page></main-page>'
        }).
        when('/todolist/edit/:todoid', {
          template: '<edit-page></edit-page>'
        }).
        when('/todolist/comment/:todoid', {
          template: '<h1>222</h1>'
        }).
        otherwise('/todolist');
    }
  ]); 
