'use strict';

var app = angular.module('warcraft', []);

app.controller('GetLadder', function ($scope, $http, classIconService, factionService, raceIconService, specIconService, colorService) {
    $http({
        method: 'POST',
        crossOrigin: true,
        url: "https://warcraftassistant.azurewebsites.net/apiv1/getLadder3v3",
        //url: "http://localhost:8080/apiv1/getLadder3v3",
        data: "{\"page\":0,\"pageSize\": 500}"
    }).success(function (data) {
        var iconsFolder = "icons/";
        $scope.players = data.players.map(function (value) {
            value.color = colorService.get(value.classId);
            value.factionId = iconsFolder + factionService.get(value.factionId);
            value.classId = iconsFolder + classIconService.get(value.classId);
            value.raceId = iconsFolder + raceIconService.get(value.raceId, value.genderId);
            value.specId = iconsFolder + specIconService.get(value.specId);
            return value;
        });
    });
    $scope.calculate = function (pl) {
        return Math.round(pl.seasonWins / (pl.seasonWins + pl.seasonLosses) * 100);
    };
    $scope.factionsCheckboxes = {alliance: true, horde: true};
});