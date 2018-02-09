(function() {
  'use strict'

  angular.module('app')
    .component('signup', {
      controller: controller,
      template: `

    <p></p>
    <div class="row">
      <div class="col">

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
          <select name="state" id="state" ng-model="$ctrl.newUser.state" class = "form-control">
  <option value="" selected="selected">Select a State</option>
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
  <option value="DC">District Of Columbia</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IN">Indiana</option>
  <option value="IA">Iowa</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="ME">Maine</option>
  <option value="MD">Maryland</option>
  <option value="MA">Massachusetts</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MS">Mississippi</option>
  <option value="MO">Missouri</option>
  <option value="MT">Montana</option>
  <option value="NE">Nebraska</option>
  <option value="NV">Nevada</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NY">New York</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VT">Vermont</option>
  <option value="VA">Virginia</option>
  <option value="WA">Washington</option>
  <option value="WV">West Virginia</option>
  <option value="WI">Wisconsin</option>
  <option value="WY">Wyoming</option>
</select>
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
        .then((newUser) => {

          $state.go('login')
        })
      }
  }
}());
