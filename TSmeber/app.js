/// <reference path="lib/types/angular/angular.d.ts"/>
var app = angular.module("app", ['ui.router', 'ngResource', "app.member", "app.main"]);
app.service("RestService", function ($http) {
    return new backend.RestService($http);
});
app.factory("memberService", function (RestService) {
    return new backend.MemberService(RestService);
});
app.run(function ($state) {
    $state.transitionTo("main", {});
});
//# sourceMappingURL=app.js.map
