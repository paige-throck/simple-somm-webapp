(function() {
  'use strict'

  angular.module('app')
    .component('homepage', {
      controller: controller,
      template: `

  </div><center>
    <button class="btn btn-primary" ui-sref="signup">Sign up</button>

    <button class="btn btn-primary" ui-sref="login">Login</button>
  </center></div>

      `
    })

    controller.$inject = ['$http', 'simpleSomm', '$state']

    function controller($http,  simpleSomm, $state) {


    }
}());
