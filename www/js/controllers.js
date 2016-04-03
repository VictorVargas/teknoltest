angular.module('starter.controllers', [])

.controller('InfoCtrl', function($scope) {})

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.contact = {
    name: '',
    email: '',
    comment: ''
  }

  $scope.submit = function() {
    // var link = 'http://192.168.1.76:8100/teknollip/api.php';
    if ($scope.contact.name == "") {
      alert("Ponga un nombre para continuar");
      return false;
    }else if ($scope.contact.email == "") {
      alert("Ponga un correo para continuar");
      return false;
    }else if ($scope.contact.comment == "") {
      alert("Ponga un comentario para continuar");
      return false;
    }

    $http({
      method : 'POST',
      url: 'http://192.168.1.76/teknollib/api/api.php',
      data:{
        name: $scope.contact.name,
        email: $scope.contact.email,
        comment: $scope.contact.comment
      }
    }).success(function(res) {
      $scope.contact.name = '';
      $scope.contact.email = '';
      $scope.contact.comment = '';

      alert("Se guardó correctamente su comentario");
    }).error(function(err){
      alert('data : ' + err);
    });
  }

}]);
