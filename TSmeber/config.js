var common;
(function (common) {
    "use strict";
    var Config = (function () {
        function Config() {
        }
        Config.RestURL = "http://localhost:1337";
        return Config;
    })();
    common.Config = Config;
})(common || (common = {}));
//# sourceMappingURL=config.js.map
