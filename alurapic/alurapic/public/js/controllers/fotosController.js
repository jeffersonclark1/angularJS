angular.module('alurapic').controller('FotosControllers',function($scope, recursoFoto){

  $scope.fotos = [];
  $scope.filtro = '';

  recursoFoto.query(function(fotos){
    $scope.fotos = fotos; 
  }, function(erro){
    console.log(erro);
  });
  
  $scope.remover = function(foto){
    recursoFoto.delete({fotoId: foto._id},function(){
        var indiceFoto = $scope.fotos.indexOf(foto);
        $scope.fotos.splice(indiceFoto, 1);
      },function(erro){
        console.log(err);
      });
  }

});