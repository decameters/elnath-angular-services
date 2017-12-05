app.service('CarService', ['$http', function($http){
    console.log('in CarService');
    var self = this;
    
    self.cars = { list: [] };

    self.companies = { list: [] };
    
    self.newCar = {}

    self.getCars = function(){
        $http({
            method: 'GET',
            url: '/cars'
        }).then(function(response){
            console.log('response', response);
            self.cars.list = response.data;
        })
    };

    self.addNewCar = function(newCar){
        $http({
            method: 'POST',
            url: '/cars',
            data: newCar
        }).then(function(response){
            console.log('response', response);
            self.newCar = {};
            self.getCars();
        })
    }

    self.getCars();

}]);