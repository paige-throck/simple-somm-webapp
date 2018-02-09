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
        <h3><b><center>{{$ctrl.user.name}} Wine List</center></b></h3>
        <p></p>

        <input type="text" ng-model="filterText" placeholder="Filter wines!">
        <p></p>
      <body data-spy="scroll" data-target="#navbar-example">

  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
    <li ng-repeat=" wine in $ctrl.wineList | filter: filterText">
    <p></p>
      <b>{{ wine.name }}</b>
      -{{ wine.vintage }},
      {{ wine.color }},
      {{ wine.varietal }}
      {{ wine.origin}}
      {{ wine.description }}
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




    // $state.transitionTo('home', null, {'reload':false});


  }
}());
