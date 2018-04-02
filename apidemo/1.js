var myApp = angular.module('myApp',[]);
// myApp.controller('mainController', function($scope,$http){
//     $http.get('http://rest-service.guides.spring.io/greeting').then(function(response){
//         $scope.greeting = response.data;
//     });
// });
myApp.controller('mainController',['$scope','$http',function($scope,$http){
    $http.get('http://5ac19ec2cb6ba30014257855.mockapi.io/demohello')
    .success(function(data){
        if(data){
            $scope.records = data;
        }
    })
    .error(function(data,status){
        console.log(data);
    });

}]);