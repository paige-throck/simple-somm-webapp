(function() {
  'use strict'

  angular.module('app')
    .component('signup', {
      controller: controller,
      template: `

<div class="row">
      <div class="col-md-8">

        <form ng-submit="">
          <div>
            <label for="name">Restaurant Name</label>
            <input ng-model="$ctrl.post.name" id="name" class="form-control">
          </div>
          <div>
            <label for="email">Email Address</label>
            <input ng-model="$ctrl.post.email" id="email" class="form-control"></input>
          </div>
          <div>
            <label for="cuisine">Cuisine</label>

            <select ng-model="cuisine" class = "form-control">
     <option ng-repeat= "cuisine in $ctrl.cuisines" value = "cuisine">{{cuisine.cuisine}}</option>
  </select>

          </div>
          <div>
            <label for="city">City</label>
            <input ng-model="$ctrl.post.city" id="city" class="form-control">
          </div>
          <div>
            <label for="state">State</label>
            <input ng-model="$ctrl.post.state" id="state" class="form-control">
          </div>
          <div>
            <label for="address">Address</label>
            <input ng-model="$ctrl.post.address" id="address" class="form-control">
          </div>
          <div>
            <label for="zipcode">Zipcode</label>
            <input ng-model="$ctrl.post.zipcode" id="zipcode" class="form-control">
          </div>
          <div>
            <label for="password">Password</label>
            <input ng-model="$ctrl.post.password" id="password" class="form-control">
          </div>
          <div>
            <label for="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" class="form-control">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              Sign up!
            </button>
          </div>
        </form>

      </div>
    </div>
      `
    })

  controller.$inject = ['$http', 'simpleSomm']

  function controller($http, simpleSomm) {
    const vm = this
    vm.cuisines;

    vm.$onInit = function () {
      simpleSomm.getCuisine()
      .then(() => {
        vm.cuisines = simpleSomm.cuisines;
      })
      }
  }
}());
