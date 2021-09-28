export default function () {
  var baseURL = "";

  this.setBaseURL = function (url) {
    baseURL = url;
  };

  this.$get = function ($http, $rootScope, $location) {
    return {
      logIn: function (user) {
        var req = {
          method: "POST",
          url: `${baseURL}/signin`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(user),
        };
        $http(req)
          .then((res) => {
            if (res.status === 200) {
              $rootScope.loggedIn = true;
              $rootScope.user = res?.data?.user;
              $location.url("/user/dashboard");
            } else {
              throw new Error(res);
            }
          })
          .catch((err) => {
            if (err.status === 400) {
              alert("User not found");
            } else if (err.status === 401) {
              alert("email id and password not correct");
            } else {
              alert("Some error");
            }
          });
      },
      signUp: function (user) {
        var req = {
          method: "POST",
          url: `${baseURL}/signup`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify(user),
        };
        $http(req)
          .then((res) => {
            if (res.status === 200) {
              $rootScope.loggedIn = true;
              $rootScope.user = res?.data?.user;
              $location.url("/user/dashboard");
            } else {
              throw new Error(res);
            }
          })
          .catch((err) => {
            if (err.status === 400) {
              alert("User with this email id already registered");
            } else {
              alert("Some error");
            }
          });
      },
      logOut: function () {
        $rootScope.loggedIn = false;
        $rootScope.user = null;
        $location.url("/");
      },
    };
  };
}
