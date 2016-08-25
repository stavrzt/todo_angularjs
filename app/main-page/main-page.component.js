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

        var update_values = function(){};


        var uptodo = function(){
          angular.element(document).ready(function () {
          $(".save_progress").bind('keyup mouseup', function () {
           var listss = JSON.parse(localStorage.lists);
           var index = $(".save_progress").index(this);
           listss[index].progress = Number(this.value);
           localStorage.setItem("lists", JSON.stringify(listss));
            });
          });
        }

      	this.placeholder = "Add new ToDo...";

      	this.addItem = function() {
          this.lists = JSON.parse(localStorage.lists);
          this.date = new Date();
      		if(this.newListText=="" || this.newListText==undefined){this.flag = true;this.placeholder = "Hey, fill me!";}
      		else{
          this.lists.push({todoText:this.newListText, flag:false, dates:this.date, progress: 0}); 
          localStorage.setItem("lists", JSON.stringify(this.lists));
          this.newListText="";
          this.flag = false; 
          this.placeholder = "Add new ToDo..."; }

          /*Функция обработки увеличения готовности таска СТАРТ*/
          uptodo();
          /*Функция обработки увеличения готовности таска КОНЕЦ*/
      	}

      	this.removeItem = function(index) {
          this.lists = JSON.parse(localStorage.lists);
      		this.lists.splice(index, 1);
      		localStorage.setItem("lists", JSON.stringify(this.lists));

          angular.element(document).ready(function () {
          var array_progress = $(".save_progress");

          for(var i=0; i<array_progress.length; i++){
            array_progress[i].value = JSON.parse(localStorage.lists)[i].progress;
          }
      	});
        }

      	this.flags = function(index, check) {
          this.lists = JSON.parse(localStorage.lists);
      	  if(check){this.lists[index].flag = true; localStorage.setItem("lists", JSON.stringify(this.lists));}
      	  else{this.lists[index].flag = false; localStorage.setItem("lists", JSON.stringify(this.lists));}
      	} 

        /*Функция обработки увеличения готовности таска СТАРТ*/
        uptodo();
        /*Функция обработки увеличения готовности таска КОНЕЦ*/

      }]
  });
