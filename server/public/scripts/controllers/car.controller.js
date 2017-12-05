app.controller('CarController', ['CarService', 'CompanyService', function(CarService, CompanyService){
    var self = this; // self is referring to the CONTROLLER here
    self.message = 'TACOS??';

    self.cars = CarService.cars;

    self.companies = CompanyService.companies;    

    self.addNewCar = CarService.addNewCar;

    // all this is doing is establishing the link between the SERVICE and the CONTROLLER
}]);