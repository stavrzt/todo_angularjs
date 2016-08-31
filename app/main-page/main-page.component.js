'use strict';

angular.
  module('mainPage').
  component('mainPage', {
    templateUrl: 'main-page/main-page.template.html',
    controller: ['$http', '$routeParams',
      function mainPageController() {

        if(localStorage["lists"]==undefined){this.lists = [];}
        else{this.lists = JSON.parse(localStorage["lists"]);}

        this.placeholder = "Add new ToDo...";
        this.ready = undefined;

        /*Функция изменения готовности таска++*/
        this.uptodo = function(event, ids){
          var itemPosition = this.returnPosition(ids);
          if(event.target.valueAsNumber==100){this.flags(ids, true);}
           this.lists[itemPosition].progress = event.target.valueAsNumber;
           localStorage.setItem("lists", JSON.stringify(this.lists));
        }
        
        /*Функция добавления таска*/
      	this.addItem = function() {
          if(localStorage["lists"]==undefined){this.lists = [];}
          else{this.lists = JSON.parse(localStorage["lists"]);}
          this.date = new Date();
      		if(this.newListText=="" || this.newListText==undefined){this.flag = true;this.placeholder = "Hey, fill me!";}
          else{
            var newid;
          if(this.lists.length==0){newid=0;}
          else{newid=(this.lists[this.lists.length-1].id+1);}

          this.lists.push({id:newid,todoText:this.newListText, flag:false, dates:this.date, progress: 0}); 
          localStorage.setItem("lists", JSON.stringify(this.lists));
          this.newListText="";
          this.flag = false; 
          this.placeholder = "Add new ToDo..."; }
      	}

        /*Функция удаления таска*/
      	this.removeItem = function(event, ids) {
          var itemPosition = this.returnPosition(ids);
          this.lists.splice(itemPosition, 1);
          localStorage.setItem("lists", JSON.stringify(this.lists));
        }

        /*Функция отметки готовности таска*/
      	this.flags = function(ids, check) {
          var itemPosition = this.returnPosition(ids);
      	  if(check){this.lists[itemPosition].flag = true;}
      	  else{this.lists[itemPosition].flag = false;}
          localStorage.setItem("lists", JSON.stringify(this.lists));
      	} 

        this.returnPosition = function (ids) {
          var position;
          this.lists.forEach(function(for_item, i, arr) {
            if(arr[i].id==ids){position = i;}
          });
          return position;
        }

        
      }]
  });
