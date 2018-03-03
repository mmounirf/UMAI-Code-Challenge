InterestCalculator.controller('SimpleInterestCtrl', function ($rootScope, $scope, $location, $route) {
    //Scope varible that will hold the results
    $scope.results;
    //Make sure to remove previous results when input fields changes (as per the calculations is per user click)
    $scope.inputFieldChanged = function () {
            $scope.results = '';
    }
    //The method that will trigger once the user hits the calculate button
    $scope.calculate = function (formData) {
        var principal = formData.principal;
        //Rate is being entered as integer, let get it's percentage value
        var rate = formData.rate/100;
        var period = formData.period;
        //Simple interest equation
        $scope.results = principal * (1 + (rate * period));      
    }
});

