'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('mainPage').
  component('mainPage', {
    templateUrl: 'main-page/main-page.template.html',
    controller: ['$http', '$routeParams',
      function mainPageController() {
      	this.lists = [{todoText:'Clean House'}];

      	this.flag = false;

      	this.placeholder = "Add new ToDo...";

      	this.addItem = function() {
      		if(this.newListText=="" || this.newListText==undefined){this.flag = true;this.placeholder = "Hey, fill me!";}
      		else{this.lists.push({todoText:this.newListText}); this.newListText=""; this.flag = false; this.placeholder = "Add new ToDo...";}
      	}

      	this.removeItem = function(index) {
      		this.lists.splice(index, 1);
      	}

      	this.editItem= function () {
      		alert("Here will be an opportunity to correct the text.");
      	}



      }]
  });
