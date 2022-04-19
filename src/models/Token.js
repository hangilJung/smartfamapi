const jwt = require("jsonwebtoken");
const moment = require("moment");

class Token {
  constructor(body) {
    this.body = body;
  }

  async tokenIssue() {
    const accessToken = jwt.sign(
      {
        expires_at: moment().add(1, "m").format("YYYY-MM-DD HH:mm:ss"),
        issued_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1m",
        issuer: "corporation sooin",
      }
    );

    return accessToken;
  }
}

module.exports = Token;
