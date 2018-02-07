(function(){
'use strict'


  angular.module('app')
    .service('simpleSomm', service)


service.inject = ['$http']
function service($http){
  const sm = this
  let id;
sm.getCuisine = function(){
  return $http.get('http://localhost:8888/signup').then(function (response){
    console.log(response.data)
    sm.cuisines = response.data
    })
  }

sm.addUser = function(newUser){
  return $http.post('http://localhost:8888/signup', newUser).then(function(response){
    console.log('you created someone!')
    sm.newUser = response.data
  })
}

sm.loginUser = function(user){
  return $http.post('http://localhost:8888/login', user).then(function(response){
    console.log("you're logged in!")
    console.log(response, 'response');
    sm.user = response.data
    id = response.data.id
  })
}

sm.getProfile = function(){
  return $http.get(`http://localhost:8888/profiles/${id}`).then(function (response){
    console.log(response.data.id)
    sm.user = response.data
    })
  }

}
}());
