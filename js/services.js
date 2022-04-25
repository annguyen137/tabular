function Service() {
  this.fetchData = function () {
    return axios({
      url: "https://625569578646add390d66e73.mockapi.io/api/member",
      method: "GET",
    });
  };
}
