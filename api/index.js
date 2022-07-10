const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfully"))
  .catch((err) => console.log(err));

// app.get("/api/v1/test",() => {
//     console.log("Test is successfull");
// });

app.use(express.json());
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/user",userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
