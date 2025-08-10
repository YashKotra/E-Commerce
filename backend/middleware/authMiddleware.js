const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.user.id).select("-password");

      if (!user) {
        console.log("User not found in DB");
        return res.status(401).json({ message: "User not found" });
      }

      req.user = user;
      console.log("Authenticated user:", req.user);
      next();
    } catch (error) {
      console.error("JWT error:", error.message);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    console.log("No token provided");
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Not Authorized as admin" });
  }
};

module.exports = { protect, admin };
