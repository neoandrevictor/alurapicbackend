angular.module('minhasDiretivas', []).directive('painel', function () {
    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    }


    ddo.templateUrl = "js/directives/painel.html";

    return ddo;
});

