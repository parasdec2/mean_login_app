export default function ($scope, authProvider, $location, $rootScope) {
  $scope.formData = {};
  $scope.signup = function () {
    authProvider.signUp($scope.formData);
  };
}
