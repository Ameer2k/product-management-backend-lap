// imports
const productRoute = require("./routes/product.routes.js");

// imports
const express = require("express"); //importing express package
const app = express(); // creates a express application
const dotenv = require("dotenv").config(); //this allows me to use my .env values in this file
const morgan = require("morgan");
const connectToDB = require("./db.js");
const cors = require("cors");
// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));

// Routes app go here
app.get("/test", (req, res) => {
  res.json({ message: "App Works" });
});
app.use("/products", productRoute);

// connect to database and listen on Port 3000
async function startServer() {
  const PORT = process.env.PORT || 3000;
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server could not start:", error.message);
    process.exitCode = 1;
  }
}

startServer();
