(function() {
  'use strict'

  angular.module('app')
    .component('profile', {
      controller: controller,
      template: `
      <div class = "row">

      <div class="col-sm-2">
        <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search">
              <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>

      <div class ="col-sm-8">
      </div>

      <div class="col-sm-2">
        <button class="btn btn-primary" ui-sref="home">Logout</button>
      </div>

        </div>
        <p></p>
        <h3><b><center>{{$ctrl.user.name}} Wine List</center></b></h3>
        <ul>
          <li ng-repeat=" wine in $ctrl.wineList" >
          <p></p>
            <b>{{ wine.name }}</b>
            {{ wine.vintage }},
            {{ wine.color }},
            {{ wine.varietal }}
            {{ wine.origin}}
            <p></p>
            {{ wine.description }}
        </li>
        </ul>

      </div>
      `
    })

  controller.$inject = ['$http', 'simpleSomm', '$state']

    function controller($http, simpleSomm, $state) {

    const vm = this

    vm.$onInit = function () {
      simpleSomm.getWineLists()
      .then(() => {
        vm.wineList = simpleSomm.wineList;
      })
        simpleSomm.getProfile()
        .then(() => {
          vm.user = simpleSomm.user;
        })

    }


  }
}());
