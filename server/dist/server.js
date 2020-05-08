"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/env");
const getConf_1 = __importDefault(require("./utils/getConf"));
const app_1 = __importDefault(require("./app"));
getConf_1.default();
app_1.default.listen(process.env.PORT, () => {
    console.log("Port ", process.env.PORT);
});
