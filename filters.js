app.filter('factionFilter', function () {
    return function (players, factionsCheckboxes) {
        var filtered = [];
        angular.forEach(players, function (player) {
            if ((factionsCheckboxes.alliance == true && factionsCheckboxes.horde == true) ||
                (factionsCheckboxes.alliance == true && factionsCheckboxes.horde == false && player.factionId.indexOf('alliance') != -1) ||
                (factionsCheckboxes.horde == true && factionsCheckboxes.alliance == false && player.factionId.indexOf('horde') != -1))
                filtered.push(player);
        });
        return filtered;
    };
});