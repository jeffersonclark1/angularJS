angular.module('alurapic').controller('FotosControllers',function($scope, $http){
  $scope.fotos = [];
  $scope.filtro = '';

  // var promise = $http.get('v1/fotos');
  // promise.then(function(retorno){
  //   $scope.fotos = retorno.data;
  // }).catch(function(err){
  //   console.log(err);
  // });

  $http.get('v1/fotos')
  .success(function(fotos){
    $scope.fotos = fotos;
  })
  .error(function(err){
    console.log(err);
  });

  $scope.remover = function(foto){
    $http.delete('v1/fotos/' + foto._id)
      .success(function(){
        var indiceFoto = $scope.fotos.indexOf(foto);

        $scope.fotos.splice(indiceFoto, 1);

        alert("Excluida com sucesso")

       })
      .error(function(err){
        console.log(err);
      });
  }

});