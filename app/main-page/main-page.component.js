'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('mainPage').
  component('mainPage', {
    templateUrl: 'main-page/main-page.template.html',
    controller: ['$http', '$routeParams',
      function mainPageController() {

	  	try{this.lists = JSON.parse(localStorage["lists"]);}
        catch(err){this.lists = [];}

      	this.placeholder = "Add new ToDo...";

      	this.addItem = function() {
      		if(this.newListText=="" || this.newListText==undefined){this.flag = true;this.placeholder = "Hey, fill me!";}
      		else{this.lists.push({todoText:this.newListText, flag:false}); localStorage.setItem("lists", JSON.stringify(this.lists)); this.newListText=""; this.flag = false; this.placeholder = "Add new ToDo..."; }	
      	}

      	this.removeItem = function(index) {
      		this.lists.splice(index, 1);
      		localStorage.setItem("lists", JSON.stringify(this.lists));
      	}

      	this.editItem = function () {
      		alert("Here will be an opportunity to correct the text.");
      	}

      	this.flags = function(index, check) {
      	  if(check){this.lists[index].flag = true; localStorage.setItem("lists", JSON.stringify(this.lists));}
      	  else{this.lists[index].flag = false; localStorage.setItem("lists", JSON.stringify(this.lists));}
      	} 



      }]
  });
