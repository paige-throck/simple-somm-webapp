(function() {
  'use strict'

  angular.module('app')
    .component('profilewinelists', {
      controller: controller,
      template: `

    <ul>
      <li ng-repeat=" wine in $ctrl.wineList" >
        {{ wine.name }}
    </li>
    </ul>

      `
    })

  controller.$inject = ['$http', 'simpleSomm']

  function controller($http, simpleSomm) {
    const vm = this

    vm.$onInit = function () {
      simpleSomm.getWineLists()
      .then(() => {
        vm.wineList = simpleSomm.wineList;
      })
    }

  }
}());
