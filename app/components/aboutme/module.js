let myapp= angular.module("Myapp",[]);
let mycontroller=function($scope){
    $scope.message="Hello world";
}
myapp.controller("Mycontroller",mycontroller);
let JSONController = function($scope){
    let Student={
        FirstName : "Lavanya Reddy",
        LastName : "Reddy",
        Email : "s534574@nwmissouri.edu", 
    }
    $scope.Student=Student;

}
myapp.controller("Student",JSONController);