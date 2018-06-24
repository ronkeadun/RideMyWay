"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _volleyball = require("volleyball");

var _volleyball2 = _interopRequireDefault(_volleyball);

var _rides = require("./server/router/rides");

var _rides2 = _interopRequireDefault(_rides);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//load express module/library
var app = (0, _express2.default)(); //create a new instance of express


//use middleware
//load applicaton server using express
app.use(_volleyball2.default);
app.use(_express2.default.static(_path2.default.join(__dirname, "UI")));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use("/api/v1", _rides2.default);

var port = process.env.PORT || 3000;

//start up application server
app.listen(port, function () {
	console.log("Server is up and listening on port " + port);
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ridesController = require("./../controller/ridesController");

var _ridesController2 = _interopRequireDefault(_ridesController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//define route

//get all rides offer route
router.get("/rides", _ridesController2.default.getAllRides);

//get a specific ride offer route
router.get("/ride/:rideId", _ridesController2.default.getSpecificRide);

//post all rides offer route
router.post("/rides", _ridesController2.default.postAllRide);

//create a ride route
router.post("/ride", _ridesController2.default.createARide);

router.get("/ride/info/:rideId", _ridesController2.default.getRideInfo);

exports.default = router;
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rides = require("./../model/rides");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rides = function () {
	function Rides() {
		_classCallCheck(this, Rides);
	}

	_createClass(Rides, null, [{
		key: "getAllRides",
		value: function getAllRides(req, res) {
			res.send(_rides.rides);
		}
	}, {
		key: "getSpecificRide",
		value: function getSpecificRide(req, res) {
			var id = req.params.rideId;
			res.send(_rides.rides[id]);
		}
	}, {
		key: "postAllRide",
		value: function postAllRide(req, res) {
			var ride = req.body;
			_rides.rides.push(ride);
			res.redirect("/api/v1/rides");
		}
	}, {
		key: "createARide",
		value: function createARide(req, res) {
			var ride = req.body;
			_rides.rides.push(ride);
			res.send(ride);
		}
	}, {
		key: "getRideInfo",
		value: function getRideInfo(req, res) {
			var id = req.params.rideId;
			var ride = _rides.rides[id];
			var query = req.query;
			var isEmptyQuery = Object.keys(query).length;
			if (!isEmptyQuery) {
				res.send(ride);
			} else {
				var response = {};
				Object.keys(query).forEach(function (key) {
					response[key] = ride[key];
				});
				res.send(response);
			}
		}
	}]);

	return Rides;
}();

exports.default = Rides;
