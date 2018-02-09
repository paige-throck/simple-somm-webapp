(function() {
  'use strict'

  angular.module('app')
    .component('profile', {
      controller: controller,
      template: `
    <div class = "row">
      <div class="col-sm-2">
        <button class="btn btn-primary" ui-sref="home">Logout</button>
      </div>


        </div>
        <p></p>
        <h3><b><center>{{$ctrl.user.name}}'s Wine List</center></b></h3>
        <p></p>

        <input type="text" ng-model="filterText" placeholder="Filter wines!">
        <p></p>
      <body data-target="#navbar-example">

  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
    <li ng-repeat=" wine in $ctrl.wineList | filter: filterText">
      <p></p>
      <div>
        <b>{{ wine.name }}</b>
        - <i>{{ wine.vintage }}</i>
      <div>
        <em>{{ wine.color }}</em>,
        <em>{{ wine.varietal }}</em>
        <em>{{ wine.origin}}</em>
      </div>
      <div>
      </div>
      {{ wine.description }}
      <a ng-click="$ctrl.deleteWine(user, wine)"> Delete</a>
      <p></p>

    </li>
    </ul>
  </div>
</body>
      `
    })

  controller.$inject = ['$http', 'simpleSomm', '$state']

    function controller($http, simpleSomm, $state) {

    const vm = this
    vm.user;
    vm.wine;

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

    vm.deleteWine = function(user, wine) {
      vm.user = user;
      vm.wine = wine;
      let id = user.id
      let wineId = wine.id
      console.log(user.id, "ussssssser id");
      console.log(wine.id, "winnnnnnne id");
      $http.delete(`http://localhost:8888/profiles/${id}/${wineId}`)
    }



    window.addEventListener("reload", function(event) {
    $state.go('home')
});


    window.onbeforeunload = function() {
      $state.go('home')
    }



  }
}());
