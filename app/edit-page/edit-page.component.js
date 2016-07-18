'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('editPage').
  component('editPage', {
    templateUrl: 'edit-page/edit-page.template.html',
    controller: ['$http', '$routeParams',
      function editPageController($http, $routeParams) {
          this.lists = JSON.parse(localStorage["lists"]);
          this.value = this.lists[$routeParams["todoid"]].todoText;
      }]
  });
