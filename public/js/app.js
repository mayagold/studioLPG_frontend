var app = angular.module('studioLPG', []);

app.controller('mainController', ['$http', function($http){

  this.url = "http://localhost:3000";

  this.user = {};


  this.login = function(userPass) {
    console.log(userPass);

    $http({
      method: 'POST',
      url: this.url + '/users/login',
      data: { user: { username: userPass.username, password: userPass.password } }
    }).then(response => {
      console.log(response);
      this.user = response.data.user;
    });
  }
}])
