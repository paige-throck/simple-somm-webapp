(function(){
'use strict'


  angular.module('app')
    .service('simpleSomm', service)


service.inject = ['$http']
function service($http){
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
    console.log(response.data[0].id, 'response');
    sm.user = response.data[0]
    id = sm.user.id
    console.log(id, 'this is the best id wowowowowowow')
    // return $http.get(`http://localhost:8888/profiles/${id}`)
    // $state.go('profile', {param: `${id}`})
    return id
  })
}

sm.getProfile = function(){
console.log(session, 'session');
  return $http.get(`http://localhost:8888/profiles/${id}`).then(function (response){
    console.log(response.data[0].id, 'from get profile')
    sm.user = response.data[0]
    })
}

// sm.getWineLists = function(){
//   return $http.get(`http://localhost:8888/profiles/${id}/wineList`).then(function (response){
//     console.log(response.data)
//     sm.wineList = response.data
//     })
//   }
//
}

}());
