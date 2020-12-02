angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){
  var ddo = {};

  ddo.restric = "AE";
  ddo.scope = {
    titulo: '@'
  }

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/meu-paine.html';
  
  return ddo;
})
.directive('minhaFoto', function() {

  var ddo = {};

  ddo.restrict = "AE";

  ddo.scope = {
      titulo: '@',
      url: '@'
  };

  ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
  
  return ddo;
})
.directive('meuBotaoPerigoso', function() {

  var ddo = {};

  ddo.restrict = "E";

  ddo.scope = {
      nome: '@',
      acao: '&'
  };

  ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)" >{{nome}}</button>';           
  
  return ddo;
})
.directive('meuFocus',function(){
  var ddo = {};

  ddo.restric = "A";

  ddo.link = function(scope, element){
    scope.$on('fotoCadastrada', function(){
      element[0].focus();
    });
  }

  return ddo;

});