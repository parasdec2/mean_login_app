export default function () {
  var baseURL = "";

  this.setBaseURL = function (url) {
    baseURL = url;
  };

  this.$get = function ($http, $rootScope, $location) {
    return {
      allUsers: function (cb) {
        var req = {
          method: "GET",
          url: `${baseURL}/employees`,
        };
        $http(req)
          .then((res) => {
            cb(res);
          })
          .catch((err) => console.log(err));
      },
      deleteUser: function (id) {
        var userId = { id };
        var req = {
          method: "DELETE",
          url: `${baseURL}/user/delete`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(userId),
        };
        $http(req)
          .then((res) => {
            alert("Successfully Deleted your account");
            $rootScope.user = null;
            $rootScope.loggedIn = false;
            $location.url("/login");
          })
          .catch((err) => {
            alert("Error occured while Deleting your account");
          });
      },
    };
  };
}
