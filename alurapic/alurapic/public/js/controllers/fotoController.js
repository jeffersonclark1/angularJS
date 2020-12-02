angular.module('alurapic').controller('FotoController',function($scope, $routeParams, cadastroFotos, recursoFoto){

  $scope.foto = {};
  $scope.success = false;
  
  if($routeParams.fotoId) {

    recursoFoto.get({fotoId: $routeParams.fotoId},function(foto){
      $scope.foto = foto;
    },function(error){
      $scope.mensagem = 'Não foi possível obter a foto'
      console.log(error);
    });

  }

  $scope.submeter = function(){
    if($scope.formulario.$valid){

      cadastroFotos.cadastrar($scope.foto)
      .then(function(dados){
        $scope.success = "Registrado com sucesso";
        if(dados.inclusao) $scope.foto = {};
        $scope.$broadcast('fotoCadastrada');
      })
      .catch(function(error){
        console.log(error);
      });

    }
  };

});