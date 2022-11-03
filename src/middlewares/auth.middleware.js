const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const auhorize = function ([...role]) {
  return expressAsyncHandler(async (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (!token || !token.startsWith("Bearer"))
        throw new Error("Not found token from client");
      const decoded = jwt.verify(
        token.split(" ")[1],
        process.env.PRIVATE_KEY_JWT
      );
      if (!role.some((x) => decoded.role == x))
        return res.status(403).json("forbibden");

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  });
};

module.exports = auhorize;
