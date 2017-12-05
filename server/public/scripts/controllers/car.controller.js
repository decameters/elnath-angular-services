app.controller('CarController', ['CarService', function(CarService){
    var self = this; // self is referring to the CONTROLLER here
    self.message = 'TACOS??';

    self.cars = CarService.cars;

    // all this is doing is establishing the link between the SERVICE and the CONTROLLER
}]);