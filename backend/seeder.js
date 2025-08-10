const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected for seeding...");

    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    const userId = createdUser._id;

    const sampleProducts = products.map((product) => ({
      ...product,
      user: userId,
    }));

    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the data:", error);
    process.exit(1);
  }
};

seedData();
