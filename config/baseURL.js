export default [
  "authProviderProvider",
  "dbProviderProvider",
  function (authProviderProvider, dbProviderProvider) {
    authProviderProvider.setBaseURL(
      "https://employye-backend.herokuapp.com/api"
    );
    dbProviderProvider.setBaseURL("https://employye-backend.herokuapp.com/api");
  },
];
