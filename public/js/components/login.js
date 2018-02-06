(function() {
  'use strict'

  angular.module('app')
    .component('login', {
      controller: controller,
      template: `
      <div class="row">
      <div class="col-md-8">

        <form ng-submit="">

        <div>
          <label for="email">Email</label>
          <input ng-model="$ctrl.post.email" id="email" class="form-control"></input>
        </div>
        
          <div>
            <label for="password">Password</label>
            <input ng-model="$ctrl.post.password" id="password" class="form-control">
          </div>


        </form>

      </div>
    </div>
      `
    })

  controller.$inject = ['$http']

  function controller($http) {

  }
}());
