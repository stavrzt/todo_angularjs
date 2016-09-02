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
        otherwise('/todolist');
    }
  ]); 
