(function() {
  'use strict'

  angular.module('app')
    .component('signup', {
      controller: controller,
      template: `

    <div class="row">
      <div class="col-md-8">

        <form ng-submit="$ctrl.addUser(newUser)">
          <div>
            <label for="name">Restaurant Name</label>
            <input ng-model="$ctrl.newUser.name" id="name" class="form-control">
          </div>
          <div>
            <label for="email">Email Address</label>
            <input ng-model="$ctrl.newUser.email" id="email" class="form-control"></input>
          </div>
          <div>
            <label for="cuisine">Cuisine</label>

            <select ng-model="$ctrl.newUser.cuisine_id" class = "form-control">
              <option ng-repeat= "cuisine in $ctrl.cuisines" value = "{{cuisine.id}}">{{cuisine.cuisine}}</option>
            </select>

          </div>
          <div>
            <label for="city">City</label>
            <input ng-model="$ctrl.newUser.city" id="city" class="form-control">
          </div>
          <div>
            <label for="state">State</label>
            <input ng-model="$ctrl.newUser.state" id="state" class="form-control">
          </div>
          <div>
            <label for="address">Address</label>
            <input ng-model="$ctrl.newUser.address" id="address" class="form-control">
          </div>
          <div>
            <label for="zipcode">Zipcode</label>
            <input ng-model="$ctrl.newUser.zipcode" id="zipcode" class="form-control">
          </div>
          <div>
            <label for="password">Password</label>
            <input ng-model="$ctrl.newUser.password" id="password" class="form-control">
          </div>
          <div>
            <label for="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" class="form-control">
          </div>
          <div class="form-group">
          <p></p>
            <button type="submit" class="btn btn-primary">
              Sign up!
            </button>
          </div>
        </form>
      </div>
    </div>

    <a ui-sref="login">Have an account? Login</a>
      `
    })

  controller.$inject = ['$http', 'simpleSomm', '$state']

  function controller($http, simpleSomm, $state) {
    const vm = this
    vm.cuisines;

    vm.$onInit = function () {
      simpleSomm.getCuisine()
      .then(() => {
        vm.cuisines = simpleSomm.cuisines;
      })
    }

      vm.addUser = function(newUser){
        simpleSomm.addUser(vm.newUser)
        .then(() => {
          $state.go('login')
        })
      }
  }
}());
