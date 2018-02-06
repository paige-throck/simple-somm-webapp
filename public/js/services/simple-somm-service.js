(function(){
'use strict'


  angular.module('app')
    .service('simpleSomm', service)


service.inject = ['$http']
function service($http){
  const sm = this

sm.getCuisine = function(){
  return $http.get('http://localhost:8888/wines').then(function (response){
    console.log(response)
    sm.wines = response.data
    })
  }

}
}());
