import jwt from "jsonwebtoken";
import User from "../models/User.js";

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Error: No token found." });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.status(401).json({ message: "Error: Invalid token." });
    }

    const user = await User.findById(decodedToken.userID).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Error: User not found." });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log("Error in verifyUser: ", err.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default verifyUser;
