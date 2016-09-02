'use strict';

angular.
  module('editPage').
  component('editPage', {
    templateUrl: 'edit-page/edit-page.template.html',
    controller: ['$http', '$routeParams',
      function editPageController($http, $routeParams) {
          this.lists = JSON.parse(localStorage["lists"]);

          var position;
          this.lists.forEach(function(for_item, i, arr) {
            if(arr[i].id==$routeParams["todoid"]){position = i;}
          });

          this.value = this.lists[position].todoText;

          this.save = function(newText){
          	this.lists[position].todoText = newText;
          	localStorage.setItem("lists", JSON.stringify(this.lists));
          }
      }]
  });
