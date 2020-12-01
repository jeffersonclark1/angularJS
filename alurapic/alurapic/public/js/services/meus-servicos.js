angular.module('meusServicos',['ngResource'])
.factory('recursoFoto',function($resource){
  return $resource('v1/fotos/:fotoId', null, {
    update: {
      method: 'PUT'
    }
  });
})
.factory('cadastroFotos',function(recursoFoto, $q){
  var servico = {};

  servico.cadastrar = function(foto){
    return $q(function(resolve,reject){
      if(foto._id){

        recursoFoto.update({fotoId: foto._id}, foto, function(){
          resolve({
            mensagem: "Foto" + foto.titulo + " atualizado com sucesso",
            inclusao: false
          });
        },function(erro){
          reject({
            mensagem: 'Nao foi possivel alterar a foto'
          });
        });

      }else{

        recursoFoto.save(foto, function(){
          resolve({
            mensagem: "Foto" + foto.titulo + " incluida com sucesso",
            inclusao: true
          })
        }, function(erro){
          reject({
            mensagem: 'Nao foi possivel cadastrar a foto'
          });
        });
         
      }
    });
  };

  return servico;
});