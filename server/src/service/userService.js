const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const tokenService = require("./tokenService");

const Dto = async (email, username, password) => {
  const condidate = await userModel.findOne({ where: { email } });
  if (condidate) {
    throw Error("This email address is already registered ");
  } else {
    const hasPassword = await bcrypt.hash(password, 10);
    return { email, username, password: hasPassword };
  }
};

class UserService {
  async registration({ username, email, password }) {
    try {
      const dto = await Dto(email, username, password);
      const user = await userModel.create(dto);
      const tokens = tokenService.generateTokens({
        email: user.dataValues.email,
        username: user.dataValues.username,
        password: user.dataValues.password,
      });
      await tokenService.saveToken({ email, token: tokens.refreshToken });
      return {
        ...tokens,
        user: user.dataValues,
      };
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  }
  async login(email, password) {
    if (email && password) {
      const user = await userModel.findOne({ where: { email } });

      if (user === null) {
        throw new Error("User not found");
      }
      const hashedPassword = user.dataValues.password;
      const passwordMatches = await bcrypt.compare(password, hashedPassword);

      if (passwordMatches) {
        const tokens = tokenService.generateTokens(user.dataValues);
        await tokenService.saveToken({
          token: tokens.refreshToken,
          email,
        });
        return {
          ...tokens,
          user,
        };
      } else {
        throw new Error("Password is incorrect");
      }
    } else {
      throw new Error("Email or password not provided");
    }
  }
  async logout(refreshToken) {
    const token = tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw Error("не авторезирован");
    }
    const userValid = tokenService.validationRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    const user = await userModel.findOne({
      where: { email: userValid?.email },
    });
    if (!userValid || !tokenFromDb) {
      throw new Error("пользователь не авторезирован");
    }
    const tokens = tokenService.generateTokens({
      email: user.dataValues.email,
      username: user.dataValues.username,
      password: user.dataValues.password,
    });
    await tokenService.saveToken({
      token: tokens.refreshToken,
      email: user.dataValues.email,
    });
    return {
      ...tokens,
      user,
    };
  }
  async getUsers() {
    const users = await userModel.findAll();
    return users.dataValues;
  }
  async update(data) {
  }
}

module.exports = new UserService();
