import authProvider from "./authprovider.js";
import dbProvider from "./dbProvider.js";

angular
  .module("providers", [])
  .provider("authProvider", authProvider)
  .provider("dbProvider", dbProvider);
