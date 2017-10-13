(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "octopus-connect/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 12/10/2017.
     */
    var index_1 = require("octopus-connect/index");
    var connector = new index_1.DataConnector({
        defaultInterface: "",
        configuration: {
            localstorage: {
                prefix: "test"
            }
        }
    });
    connector.createEntity("endpoint1", { key1: "val1", key2: "val2" });
    console.log(connector);
});
//# sourceMappingURL=test1.js.map