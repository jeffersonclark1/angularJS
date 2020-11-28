angular.module('alurapic').controller('FotoController',function($scope, $http, $routeParams){
  $scope.foto = {};

  $scope.success = false;
  
  if($routeParams.fotoId){
    $http.get('v1/fotos/' + $routeParams.fotoId)
      .success(function(foto){
        $scope.foto = foto;
      })
      .error(function(err){
        console.log(err);
      });
  }

  $scope.submeter = function(){
    if($scope.formulario.$valid){
      if($scope.foto._id){
        
        $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
        .success(function(fotos){
          $scope.success = "Foto alterado com sucesso";
        })
        .error(function(err){
          console.log(err);
        });

      } else {

        $http.post('v1/fotos', $scope.foto)
        .success(function(fotos){
          $scope.success = "Foto criada com sucesso";
          $scope.foto = {};
        })
        .error(function(err){
          console.log(err);
        });

      }
    }
  };

});