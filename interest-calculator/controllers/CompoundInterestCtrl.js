InterestCalculator.controller('CompoundInterestCtrl', function ($rootScope, $scope, $location, $route) {
    //Scope varible that will hold the results
    $scope.results;
    //Array of objects that holds each year interest value.
    $scope.totalPerYear = [];

    //Make sure to remove previous results when input fields changes (as per the calculations is per user click)
    $scope.inputFieldChanged = function () {
        $scope.results = '';
    }

    //The method that will trigger once the user hits the calculate button
    $scope.calculate = function (formData) {
        $scope.totalPerYear = [];
        var principal = formData.principal;
        //Rate is being entered as integer, let get it's percentage value
        var rate = formData.rate/100;
        var period = formData.period;
        //Compound interest equation of the total amount at the end of the period
        $scope.results = principal * (Math.pow((1 + rate), period)); 
        //Loop over each period unit
        for (i = 1; i <= period; i++) {
            //Push period unit value and total interest
            $scope.totalPerYear.push({'year': i, 'value': principal * (Math.pow((1 + rate), i))});
        }
    }
});