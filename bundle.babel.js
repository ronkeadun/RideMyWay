"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _rides = require("./server/router/rides");

var _rides2 = _interopRequireDefault(_rides);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//configure app
app.set("view engine", "ejs");
app.set("views", _path2.default.join(__dirname, "server/views"));

//use middleware
app.use(_express2.default.static(_path2.default.join(__dirname, "UI")));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded());

app.use(_rides2.default);

//app.use("/api/v1", require("./server/router/rides"));


var port = process.env.PORT || 3000;

app.listen(3000, function () {
	console.log("listening on port " + port);
});
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//define route
var rideOffers = [{ id: 1, desc: "ride1" }, { id: 2, desc: "ride2" }, { id: 3, desc: "ride3" }];

/*router.get("/", (req, res)=>{
	res.render("dashboard");
});*/

router.get("/api/v1/rides", function (req, res) {
	res.render("index", {
		rides: rideOffers
	});
});

router.post("/add", function (req, res) {
	var newRide = req.body.newride;
	rideOffers.push({
		id: rideOffers.length + 1,
		desc: newRide
	});
	res.redirect("/api/v1/rides");
});

exports.default = router;

//module.exports = router;
