angular.module('alurapic').controller('FotoController',function($scope, $routeParams, cadastroFotos){
  $scope.foto = {};

  $scope.success = false;
  
  if($routeParams.fotoId) {
    // $http.get('/v1/fotos/' + $routeParams.fotoId)
    // .success(function(foto) {
    //   $scope.foto = foto;
    // })
    // .error(function(erro) {
    //   console.log(erro);
    //   $scope.mensagem = 'Não foi possível obter a foto'
    // });

    recursoFoto.get({fotoId: $routeParams.fotoId},function(foto){
      $scope.foto = foto;
    },function(error){
      $scope.mensagem = 'Não foi possível obter a foto'
      console.log(error);
    });

  }

  $scope.submeter = function(){
    if($scope.formulario.$valid){

      cadastroFotos.cadastrar(foto)
      .then(function(dados){
        $scope.success = true;
        if(dados.inclusao) $scope.foto = {};
      })
      .catch(function(error){
        console.log(error);
      });

    }
  };

});