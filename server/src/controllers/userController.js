const userModel = require("../models/user-model");
const userService = require("../service/userService");

class UserController {
  async registration(req, res) {
    try {
      const { username, email, password } = req.body;
      const userData = await userService.registration({
        username,
        email,
        password,
      });
      res.cookie("refreshToken", userData.refresh, {
        maxAge: 60 * 24 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(201).json(userData);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 60 * 24 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(201).json(userData);
    } catch (error) {
      res.status(404).json(error);
    }
  }
  async logout(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json(token);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const refresh = await userService.refresh(refreshToken);
      res.cookie("refreshToken", refresh, {
        maxAge: 60 * 24 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(201).json(refresh);
    } catch (error) {
      console.log(error);
      return res.status(404).json(error);
    }
  }
  async getUsers(req, res) {
    const users = await userService.getUsers();
    res.json(users);
  }
  async update(req, res) {
    // const user = req.body;
    // const updateUser = await userService.update()
  }
}
module.exports = new UserController();
