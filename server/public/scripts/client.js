
console.log('client.js has been loaded');

var app = angular.module('PetApp', []);

app.controller('PetController', ['$http', function ($http) {
    console.log('Pet Controller has been loaded');
    var self = this;
    self.pets = [];

    self.getPets = function () {
        console.log('get the pets');
        $http({
            method: 'GET',
            url: '/pets',
        }).then(function (response) {
            console.log(response.data);
            self.pets = response.data;
        }); //end of $http
    }; //end of getPets

    self.updatePets = function (id) {
        console.log(id);
        $http({
            method: 'PUT',
            url: '/pets/' + id,
            data: self.newPet
        }).then(function (response){
            self.getPets();
        })
    }
    self.getPets();
}]); //end of controller