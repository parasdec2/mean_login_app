export default function ($scope, $rootScope, $location, authProvider) {
  if (!$rootScope.loggedIn && $rootScope.user === null) {
    $location.url("/login");
    return;
  } else {
    $scope.user = $rootScope.user;
    $scope.logout = authProvider.logOut;
  }
}
