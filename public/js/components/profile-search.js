(function() {
  'use strict'

  angular.module('app')
    .component('profilesearch', {
      controller: controller,
      template: `

      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>

      `
    })

  controller.$inject = ['$http']

  function controller($http) {

  }
}());
