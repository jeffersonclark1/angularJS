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
});