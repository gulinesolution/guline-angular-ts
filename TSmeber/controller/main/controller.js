var main = angular.module("app.main", ['ui.router', 'ngResource']);
main.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("main", {
        url: "/",
        views: {
            "main": {
                templateUrl: "views/main.html",
                controller: controller.MainController
            }
        }
    });
});

var controller;
(function (controller) {
    var MainController = (function () {
        function MainController($scope, $state) {
            $scope.gotoRegister = function () {
                $state.transitionTo("main.member_register", {});
            };
        }
        return MainController;
    })();
    controller.MainController = MainController;
})(controller || (controller = {}));
//# sourceMappingURL=controller.js.map
