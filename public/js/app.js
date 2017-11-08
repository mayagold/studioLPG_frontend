var app = angular.module('studioLPG', []);

app.controller('mainController', ['$http', function($http){

  this.url = "http://localhost:3000";

  this.user = {};


  this.login = (userPass) => {
    $http({
      method: 'POST',
      url: this.url + '/users/login',
      data: { user: { username: userPass.username, password: userPass.password } }
    }).then(response => {
      console.log(response);
      this.user = response.data.user;
      localStorage.setItem('token', JSON.stringify(response.data.token));
      console.log(localStorage);
      this.getUser();
    });
  }

  this.getUser = () => {
    $http({
      url: this.url + '/users',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    }).then( response => {
      console.log(response);
      if (response.data.status === 401) {
        this.error = "Unauthorized";
      } else {
        this.loggedIn = true;
      }
    })
  }

  this.logout = () => {
    localStorage.clear('token');
    location.reload();
  }
  
}])
