'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('mainPage').
  component('mainPage', {
    templateUrl: 'main-page/main-page.template.html',
    controller: ['$http', '$routeParams',
      function mainPageController($http, $routeParams) {
      	this.lists = [{todoText:'Clean House'}, {todoText:'This is'}, {todoText:'Lock this'}];

      	this.addItem = function() {
      		 this.lists.push({todoText:this.newListText});
      	}
      }]
  });
