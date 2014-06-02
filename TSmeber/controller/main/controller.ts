var main = angular.module("app.main", ['ui.router', 'ngResource'])
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

module controller {
    export class MainController {
        constructor($scope: scope.IMainController, $state) {
            $scope.gotoRegister = () => {
                $state.transitionTo("main.member_register", {});
            }
        }
    }
}