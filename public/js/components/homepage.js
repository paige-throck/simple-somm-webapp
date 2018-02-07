(function() {
  'use strict'

  angular.module('app')
    .component('homepage', {
      controller: controller,
      template: `

  </div>
    <button class="btn btn-primary" ui-sref="signup">Sign up</button>


    <button class="btn btn-primary" ui-sref="login">Login</button>

  </div>



      `
    })

  controller.$inject = ['$http']

  function controller($http) {

  }
}());
