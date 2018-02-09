(function(){
'use strict'


  angular.module('app')
    .service('simpleSomm', service)


service.inject = ['$http', '$cookies']
function service($http, $cookies){
  const sm = this
  let id;
  let user;

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
    console.log(response.data, "dtatatatatatata");
    sm.user = response.data
    id = response.data.id
    console.log(id);
    // return $http.get(`http://localhost:8888/profiles/${id}`)
    // $state.go('profile', {param: `${id}`})
    return id
  })
}

sm.getProfile = function(){
  return $http.get(`http://localhost:8888/profiles/${id}`).then(function (response){
    console.log(response.data[0].id, 'from get profile')
    sm.user = response.data[0]
    })
}

sm.getWineLists = function(){
  return $http.get(`http://localhost:8888/profiles/${id}/wineList`).then(function (response){
    console.log(response, 'get wines response')
    console.log(response.data.response, 'wiwnwnwnwnwnwnwnwnwnwnwnw')
    sm.wineList = response.data.response
    })
  }

}

}());
