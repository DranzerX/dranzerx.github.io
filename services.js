app.service('classIconService', function () {
    this.get = function (classId) {
        var icon = -1;
        switch ((classId)) {
            case 1:
                icon = "warrior";
                break;
            case 2:
                icon = "paladin";
                break;
            case 3:
                icon = "hunter";
                break;
            case 4:
                icon = "rogue";
                break;
            case 5:
                icon = "priest";
                break;
            case 6:
                icon = "deathknight";
                break;
            case 7:
                icon = "shaman";
                break;
            case 8:
                icon = "mage";
                break;
            case 9:
                icon = "warlock";
                break;
            case 10:
                icon = "monk";
                break;
            case 11:
                icon = "druid";
                break;
            case 12:
                icon = "demonhunter";
                break;
            default:
                break;
        }
        return icon + ".png";
    }
});
app.service('factionService', function () {
    this.get = function (factionId) {
        if (factionId == 0)
            return "alliance.png";
        else
            return "horde.png";
    }
});
app.service('raceIconService', function () {
    this.get = function (raceId, genderId) {
        var icon = -1;
        if (genderId == 0) {
            switch (raceId) {
                case 1:
                    icon = "human_female";
                    break;
                case 2:
                    icon = "orc_female";
                    break;
                case 3:
                    icon = "dwarf_female";
                    break;
                case 4:
                    icon = "nightelf_female";
                    break;
                case 5:
                    icon = "scourge_female";
                    break;
                case 6:
                    icon = "tauren_female";
                    break;
                case 7:
                    icon = "gnome_female";
                    break;
                case 8:
                    icon = "troll_female";
                    break;
                case 9:
                    icon = "goblin_female";
                    break;
                case 10:
                    icon = "bloodelf_female";
                    break;
                case 11:
                    icon = "draenei_female";
                    break;
                case 22:
                    icon = "worgen_female";
                    break;
                case 25:
                    icon = "pandaren_female";
                    break;
                case 26:
                    icon = "pandaren_female";
                    break;
            }
        } else {
            switch (raceId) {
                case 1:
                    icon = "human_male";
                    break;
                case 2:
                    icon = "orc_male";
                    break;
                case 3:
                    icon = "dwarf_male";
                    break;
                case 4:
                    icon = "nightelf_male";
                    break;
                case 5:
                    icon = "scourge_male";
                    break;
                case 6:
                    icon = "tauren_male";
                    break;
                case 7:
                    icon = "gnome_male";
                    break;
                case 8:
                    icon = "troll_male";
                    break;
                case 9:
                    icon = "goblin_male";
                    break;
                case 10:
                    icon = "bloodelf_male";
                    break;
                case 11:
                    icon = "draenei_male";
                    break;
                case 22:
                    icon = "worgen_male";
                    break;
                case 25:
                    icon = "pandaren_male";
                    break;
                case 26:
                    icon = "pandaren_male";
                    break;
            }
        }
        return icon + ".png";
    }
});
app.service('specIconService', function () {
    this.get = function (specId) {
        var icon = -1;
        switch (specId) {
            case 250:
                icon = "blood";
                break;
            case 251:
                icon = "frost";
                break;
            case 252:
                icon = "unholy";
                break;
            case 577:
                icon = "dps";
                break;
            case 581:
                icon = "tank";
                break;
            case 102:
                icon = "balance";
                break;
            case 103:
                icon = "feral";
                break;
            case 104:
                icon = "guardian";
                break;
            case 105:
                icon = "druid_restoration";
                break;
            case 253:
                icon = "beastmastery";
                break;
            case 254:
                icon = "marksman";
                break;
            case 255:
                icon = "survival";
                break;
            case 62:
                icon = "arcane";
                break;
            case 63:
                icon = "fire";
                break;
            case 64:
                icon = "mage_frost";
                break;
            case 268:
                icon = "brewmaster";
                break;
            case 269:
                icon = "windwalker";
                break;
            case 270:
                icon = "mistweaver";
                break;
            case 65:
                icon = "holy";
                break;
            case 66:
                icon = "paladin_protection";
                break;
            case 70:
                icon = "retribution";
                break;
            case 256:
                icon = "discipline";
                break;
            case 257:
                icon = "priest_holy";
                break;
            case 258:
                icon = "shadow";
                break;
            case 259:
                icon = "assassination";
                break;
            case 260:
                icon = "outlaw";
                break;
            case 261:
                icon = "subtlety";
                break;
            case 262:
                icon = "elemental";
                break;
            case 263:
                icon = "enhancement";
                break;
            case 264:
                icon = "restoration";
                break;
            case 265:
                icon = "affliction";
                break;
            case 266:
                icon = "demonology";
                break;
            case 267:
                icon = "destruction";
                break;
            case 71:
                icon = "arms";
                break;
            case 72:
                icon = "fury";
                break;
            case 73:
                icon = "protection";
                break;
        }
        return icon + ".png";
    }
});
app.service('colorService', function () {
    this.get = function (classId) {
        var color = "";
        switch (classId) {
            case 1:
                color = "#C79C6E";
                break;
            case 2:
                color = "#F58CBA";
                break;
            case 3:
                color = "#ABD473";
                break;
            case 4:
                color = "#FFF569";
                break;
            case 5:
                color = "#FFFFFF";
                break;
            case 6:
                color = "#C41F3B";
                break;
            case 7:
                color = "#0070DE";
                break;
            case 8:
                color = "#69CCF0";
                break;
            case 9:
                color = "#9482C9";
                break;
            case 10:
                color = "#00FF96";
                break;
            case 11:
                color = "#FF7D0A";
                break;
            case 12:
                color = "#A330C9";
                break;
        }
        return color;
    }
});