import express from "express";
import path from "path"
import bodyParser from "body-parser"
const app = express();

//configure app
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "server/views"));
//app.set("UI",path.join(__dirname, "UI"));

//use middleware
app.use(express.static(path.join(__dirname, "UI")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//define route
let rideOffers =[
					{id:1, desc: "ride1"},
					{id:2, desc: "ride2"},
					{id:3, desc: "ride3"}
				];

/*app.get("/", (req, res)=>{
	res.render("dashboard");
});*/

app.get("/api/v1/rides", (req, res)=>{
	res.render("index", {
		rides:rideOffers,
	});
});

app.post("/add", (req, res)=>{
	let newRide = req.body.newride;
	rideOffers.push({
		id:rideOffers.length + 1,
		desc:newRide
	})
	res.redirect("/api/v1/rides")
})

const port = process.env.PORT || 3000;

app.listen(3000, ()=>{
	console.log(`listening on port ${ port }`)
})