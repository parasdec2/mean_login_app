import deleteComponent from "./components/delete/delete.component.js";
import logoutComponent from "./components/logout/logout.component.js";
import usersListCompnent from "./components/usersList/usersList.compnent.js";
import { baseUrl, routeConfig, interceptor } from "./config/index.js";
import { dashBoard, login, signUp } from "./controllers/index.js";
import appInterceptor from "./interceptors/interceptor.js";

angular
  .module("app", ["ngRoute", "providers"])
  .factory("appInterceptor", appInterceptor)
  .config(interceptor)
  .config(baseUrl)
  .config(routeConfig)
  .component("usersList", usersListCompnent)
  .component("logout", logoutComponent)
  .component("deleteUser", deleteComponent)
  .controller("login", login)
  .controller("signup", signUp)
  .controller("dashboard", dashBoard)
  .run(function ($rootScope) {
    $rootScope.loggedIn = false;
    $rootScope.user = null;
  });
