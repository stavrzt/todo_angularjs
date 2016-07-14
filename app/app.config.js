

/*ТУТ БУДУЩИЕ РОУТЫ*/

'use strict';

angular.
  module('todoApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      
      $routeProvider.
        when('/todolist', {
          template: '<main-page></main-page>'
        }).
        otherwise('/todolist');
    }
  ]); 
