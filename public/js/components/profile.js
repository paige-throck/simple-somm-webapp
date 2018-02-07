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
      </div>
      `
    })

  controller.$inject = ['$http', 'simpleSomm', '$state']

    function controller($http, simpleSomm, $state) {

    const vm = this

    vm.$onInit = function () {
      simpleSomm.getProfile()
      .then(() => {
        vm.user = simpleSomm.user;
      })
    }

  }
}());
