(function() {
  'use strict'

  angular.module('app')
    .component('homepage', {
      controller: controller,
      template: `

    <h1>Hello World</h1>

      `
    })

  controller.$inject = ['$http']

  function controller($http) {

  }
}());
