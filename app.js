//load applicaton server using express
import express from "express";  //load express module/library
import path from "path";
import bodyParser from "body-parser";
import volleyball from "volleyball";
import router from "./server/router/rides";

const app = express();   //create a new instance of express


//use middleware
app.use(volleyball);
app.use(express.static(path.join(__dirname, "UI")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/v1", router);



const port = process.env.PORT || 3000;

//start up application server
app.listen(3000, ()=>{
	console.log(`Server is up and listening on port ${ port }`)
})