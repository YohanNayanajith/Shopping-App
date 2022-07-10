const router = require("express").Router();

router.get("/userTest",(req,res) => {
    res.send("User test is success");
});

router.post("/userPost",(req,res) => {
    const userName = req.body.userName;
    console.log(userName);
    res.send("Success");
});

module.exports = router;