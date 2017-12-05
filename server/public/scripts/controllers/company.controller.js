app.controller('CompanyController', ['CompanyService', function(CompanyService){
    var self = this; // self is referring to the CONTROLLER here
    self.message = 'What up homie??';
    self.companies = CompanyService.companies;
    
    // all this is doing is establishing the link between the SERVICE and the CONTROLLER
}]);