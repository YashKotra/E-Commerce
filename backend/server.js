const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO CLOTHING>>");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.listen(PORT, () => {
  console.log("listing on port", PORT);
});
