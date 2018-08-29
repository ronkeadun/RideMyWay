import express from "express";
const router = express.Router();

//Route paths are prepended with /auth
router.get("/", (req, res)=>{
	res.json({
		message:'Locked'
	})
});

const validUser = (user) =>{
	const validEmail = typeof user.email == "string" && user.email.trim() != "";
	const validPassword = typeof user.password == "string" && user.password.trim().length >= 6;
	return validEmail && validPassword;
}

router.post("/signup", (req, res, next)=>{
	if(validUser(req.body)){
			res.json({
			message: user 
		})
	}else{
		//send an error
		next(new Error("Invalid User"));
	}
});

export default router;