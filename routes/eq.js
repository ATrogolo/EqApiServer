var express = require("express");
var router = express.Router();
var eqModel = require("../EqModel-server");

// return model
router.get("/:modelId", function(request, response) {
  response.setHeader("Content-Type", "application/json");

  const modelResponse = {
    result: "ok",
    model: eqModel
  };
  response.end(JSON.stringify(modelResponse));
});

router.get("/:modelId/valuelists/:table", function(request, response) {
  response.setHeader("Content-Type", "application/json");

  const valuesListResponse = {
    result: "ok",
    values: [
      { id: "US", text: "US", items: null },
      { id: "IT", text: "IT", items: null }
    ]
  };
  response.end(JSON.stringify(valuesListResponse));
});

///:modelId/queries/:queryId/sync
router.get("/:modelId/queries/:queryId/sync", function(request, response) {
  response.end();
});

// // define the about route
// router.get("/about", function(req, res) {
//   res.send("About birds");
// });

module.exports = router;
