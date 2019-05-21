angular.module("myApp").config(function ($routeProvider) {

    console.log($routeProvider);
    $routeProvider
    .when("/", {
        templateUrl: "app/components/home/home.html",
        controller:"homectrl"
    })
    .when("/Employee", {
        templateUrl : "app/components/employee/employee.html",
        controller : "empctrl"
    })
    .when("/pmbok", {
        templateUrl : "app/components/pmbok/pmbokmatrix.html",
        controller : "matrixctrl"
    })
    .when("/aboutme", {
        templateUrl : "app/components/aboutme/index.html",
<<<<<<< HEAD
        controller : "mycontroller"
=======
        controller : "matrixctrl"
>>>>>>> f6b1da67e019976aa9153ce53d95635b9c7ef7ed
    });
});