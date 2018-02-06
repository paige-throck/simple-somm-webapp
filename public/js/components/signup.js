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
            <label for="title">Title</label>
            <input ng-model="$ctrl.post.title" id="title" class="form-control">
          </div>
          <div>
            <label for="body">Body</label>
            <textarea ng-model="$ctrl.post.body" id="body" class="form-control"></textarea>
          </div>
          <div>
            <label for="author">Author</label>
            <input ng-model="$ctrl.post.author" id="author" class="form-control">
          </div>
          <div>
            <label for="image-url">Image URL</label>
            <input ng-model="$ctrl.post.image_url" id="image-url" class="form-control">
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

  controller.$inject = ['$http']

  function controller($http) {

  }
}());
