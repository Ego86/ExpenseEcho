require("dotenv").config();
const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token-model.js");
class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "60d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  validationAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }
  validationRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }
  async saveToken({ email, token }) {
    const tokenRefresh = await tokenModel.findOne({
      where: { user_email: email },
    });

    if (tokenRefresh) {
      const udpateToken = await tokenModel.update(
        { token },
        { where: { user_email: email } },
      );
      if (!udpateToken) {
        throw new Error("error update Token");
      }
      return udpateToken;
    } else {
      const tokenData = await tokenModel.create({
        user_email: email,
        token,
      });
      if (!tokenData) {
        throw new Error("error save token");
      }
      return tokenData.dataValues;
    }
  }

  async removeToken(refreshToken) {
    return await tokenModel.destroy({ where: { token: refreshToken } });
  }
  async findToken(refreshToken) {
    const token = await tokenModel.findOne({ where: { token: refreshToken } });
    return token.dataValues;
  }
}
module.exports = new TokenService();
