import express from "express";
import path from "path";
import bodyParser from "body-parser";
import volleyball from "volleyball";
import router from "./server/router/rides";

const app = express();

//configure app
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "server/views"));




//use middleware
app.use(volleyball);
app.use(express.static(path.join(__dirname, "UI")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/v1", router);



const port = process.env.PORT || 3000;

app.listen(3000, ()=>{
	console.log(`listening on port ${ port }`)
})