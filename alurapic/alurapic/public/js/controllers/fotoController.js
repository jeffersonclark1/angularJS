angular.module('alurapic').controller('FotoController',function($scope, $http){
  $scope.foto = {};

  $scope.success = false;

  $scope.submeter = function(){
    if($scope.formulario.$valid){
      $http.post('v1/fotos', $scope.foto)
      .success(function(fotos){
        $scope.success = true;
        $scope.foto = {};
        // alert("Cadastrado com sucesso")
      })
      .error(function(err){
        console.log(err);
      });
    }
  };
});