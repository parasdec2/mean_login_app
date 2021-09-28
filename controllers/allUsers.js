export default function ($scope, dbProvider) {
  dbProvider.allUsers((res) => {
    $scope.allUsers = res.data;
  });
  $scope.reverseSort = false;
  $scope.sortBy = function (colName) {
    $scope.reverseSort =
      $scope.colName == colName ? !$scope.reverseSort : false;
    $scope.colName = colName;
  };
}
