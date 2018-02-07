(function() {
  'use strict'

  angular.module('app')
    .component('profilewinelists', {
      controller: controller,
      template: `

        "Wine List"

      `
    })

  controller.$inject = ['$http']

  function controller($http) {

  }
}());
