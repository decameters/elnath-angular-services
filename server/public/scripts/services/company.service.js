app.service('CompanyService', ['$http', function($http){
    var self = this; // self is referring to the SERVICE here

    self.companies = { list: [] };

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

    self.getCompanies(); // don't forget to call the function
}]);