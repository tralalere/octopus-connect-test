/**
 * Created by Christophe on 12/10/2017.
 */
import {DataConnector} from "octopus-connect/index";

var connector:DataConnector = new DataConnector({
    defaultInterface: "localstorage",
    configuration: {
        localstorage: {
            prefix: "test"
        }
    }
});

connector.createEntity("endpoint1", {key1: "val1", key2: "val2"});