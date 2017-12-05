app.service('CarService', ['$http', function($http){
    console.log('in CarService');
    var self = this;
    
    self.cars = { list: [] };

    self.getCars = function(){
        $http({
            method: 'GET',
            url: '/cars'
        }).then(function(response){
            console.log('response', response);
            self.cars.list = response.data;
            // updates the list through the digest cycle
        })
    };

    self.getCars();

}]);