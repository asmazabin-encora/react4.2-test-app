const ListController = require("../controllers/FetchList");

module.exports = {
  configure: function(app, router) {
    app.get("/", function(req, res) {
      ListController.getList(req, res);
    });
  }
};
