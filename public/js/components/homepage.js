(function() {
  'use strict'

  angular.module('app')
    .component('homepage', {
      controller: controller,
      template: `

  </div>
    <button ui-sref="signup">Sign up</button>


    <button ui-sref="login">Login</button>

  </div>

      `
    })

  controller.$inject = ['$http']

  function controller($http) {

  }
}());
