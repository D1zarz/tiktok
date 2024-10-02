const UserModel = require("../models/userModel");

class UserService {
  static async getUser(userId) {
    const user = await UserModel.findById(userId);
    if (!user) {
      return false;
    }
    return user;
  }

  static async getTikTok(userId) {
    const user = await UserModel.findById(userId);
    if (!user) {
      return false;
    }
    return {
      username: user.ttName,
      cointrust: user.cointrust,
    };
  }

  static async createUser(data) {
    const user = new UserModel(data);
    console.log(user);
    
    return user.save();
  }
}

module.exports = UserService;
