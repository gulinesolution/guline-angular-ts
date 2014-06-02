/// <reference path="../../lib/types/angular/angular.d.ts"/>
var memberModule = angular.module("app.member", ['ui.router', 'ngResource']);

memberModule.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("main.member_register", {
        url: "member/register",
        templateUrl: "views/member.register.html",
        controller: controller.MemberController
    });
});
//# sourceMappingURL=module.js.map
