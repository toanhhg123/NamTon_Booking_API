var jwt = require("jsonwebtoken");

class JwtService {
  static PRIVATE_KEY_JWT = process.env.PRIVATE_KEY_JWT;

  static genarateToken(payload) {
    return jwt.sign(payload, this.PRIVATE_KEY_JWT, { expiresIn: "10d" });
  }
}

module.exports = JwtService;
