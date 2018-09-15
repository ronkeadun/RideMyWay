//load applicaton server using express
import express from "express";  //load express module/library
import path from "path";
import bodyParser from "body-parser";
import volleyball from "volleyball";
import rideRoutes from "./server/routers/rides";
import rides from "./server/db/rides";
//import pg from "pg";

import authRoutes from "./server/auth";


const app = express();   //create a new instance of express

//single client connection
/*const client = new pg.Client("postgres://ronke:3377@localhost/ridesDB");
client.connect((err)=>{
	if(err){
		console.log(err);
	}
	client.query("select * from rides", (err,result)=>{
		//call done to release the client back to the pool
		if(err){
			return console.error("error running query", err);
		}
		console.log(result.rows);
		client.end((err)=>{
			if(err) {throw err;}
		})
	});
});*/


//use middleware
app.use(volleyball);
app.use(express.static(path.join(__dirname, "UI")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use("/api/v1/rides", rideRoutes);
app.use("/api/v1/auth", authRoutes); 

app.use((req, res, next)=>{
	res.sendStatus(404);
});

app.use((err, req, res, next)=>{
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: req.app.get("env") === "development" ? err : {}
	})
});


const port = process.env.PORT || 3000;

//start up application server
app.listen(port, ()=>{
	console.log(`Server is up and listening on port ${ port }`)
})

export default app;