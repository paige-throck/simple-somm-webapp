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
    const vm = this

    vm.$onInit = function () {
      simpleSomm.getWineLists()
      .then(() => {
        vm.wineList = simpleSomm.wineList;
      })
    }

  }
}());
