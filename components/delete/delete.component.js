export default {
  template:
    "<div><button type='submit' class='btn btn-primary'  ng-click='delete()'>Delete Accunt</button></div>",
  controller: function ($scope, $rootScope, dbProvider) {
    console.log("in delete");
    $scope.delete = function () {
      dbProvider.deleteUser($rootScope.user._id);
    };
  },
};
