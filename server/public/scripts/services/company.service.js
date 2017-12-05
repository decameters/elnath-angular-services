app.service('CompanyService', ['$http', function($http){
    var self = this; // self is referring to the SERVICE here

    self.companies = { list: [] };

    self.newCompany = {};

    self.getCompanies = function(){
        $http({
            method: 'GET',
            url: '/companies'
        }).then(function(response){
            console.log('response', response);
            self.companies.list = response.data;
            // updates the list through the digest cycle
        })
    };

    self.addNewCompany = function(newCompany){
        console.log('in addNewCompany', newCompany);
        
        $http({
            method: 'POST',
            url:'/companies',
            data: newCompany
        }).then(function(response){
            console.log('response', response);
            self.newCompany = {};
            self.getCompanies();
        })
    }

    self.getCompanies(); // don't forget to call the function
}]);