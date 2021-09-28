export default function ($scope, authProvider, $rootScope, $location) {
  if ($rootScope.user !== null) {
    $location.url("/user/dashboard");
    return;
  }
  $scope.formData = {};
  $scope.login = function () {
    authProvider.logIn($scope.formData);
  };
}
