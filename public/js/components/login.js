(function() {
  'use strict'

  angular.module('app')
    .component('login', {
      controller: controller,
      template: `
      <div class="row">
      <div class="col-md-8">

        <form ng-submit="$ctrl.loginUser(user)">

        <div>
          <label for="email">Email</label>
          <input ng-model="$ctrl.user.email" id="email" class="form-control"></input>
        </div>

          <div>
            <label for="password">Password</label>
            <input ng-model="$ctrl.user.password" id="password" class="form-control">
          </div>
          <p></p>
          <button type="submit" class="btn btn-primary">
            Log in!
          </button>

        </form>

      </div>
    </div>

    <a ui-sref="signup">Not a user? Create Account</a>
      `
    })

  controller.$inject = ['$http', 'simpleSomm', '$state']

  function controller($http, simpleSomm, $state) {

  const vm = this



    vm.loginUser = function(user){
      simpleSomm.loginUser(vm.user)
      .then((user) => {
        
        $state.go('profile', {param: `${1}`})
      })
    }

  }
}());
