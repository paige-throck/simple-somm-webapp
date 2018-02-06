(function() {
  'use strict'

  angular.module('app')
    .component('profile', {
      controller: controller,
      template: `

        <div class = "row">
        <profilesearch></profilesearch>
        </div>
        <p></p>
        <profilewinelists></profilewinelists>

      `
    })

  controller.$inject = ['$http']

  function controller($http) {

  }
}());
