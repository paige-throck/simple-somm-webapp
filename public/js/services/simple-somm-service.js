(function(){
'use strict'


  angular.module('app')
    .service('simpleSomm', service)


service.inject = ['$http']
function service($http){
  const sm = this

sm.getCuisine = function(){
  return $http.get('http://localhost:8888/signup').then(function (response){
    console.log(response.data)
    sm.cuisines = response.data
    })
  }

}
}());
