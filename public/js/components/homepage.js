(function() {
  'use strict'

  angular.module('app')
    .component('homepage', {
      controller: controller,
      template: `

  <div><center>
    <button class="btn btn-primary" ui-sref="signup">Sign up</button>

    <button class="btn btn-primary" ui-sref="login">Login</button>
  </center></div>

  <div class="wineImage"><center>
  <img src="https://images.vexels.com/media/users/3/127397/isolated/preview/fd2442dbe6bdab14473d0e2e98bd8207-champagne-glass-bottle-icon-by-vexels.png" alt="wine bottle">
  </center></div>

      `
    })

    controller.$inject = ['$http', 'simpleSomm', '$state']

    function controller($http,  simpleSomm, $state) {


    }
}());
