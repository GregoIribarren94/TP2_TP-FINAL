import UserService from "../services/UserService.js";

class UserController {
  userService = new UserService();

  createUser = async (req, res) => {
    try {
      const { name, mail, pass } = req.body;
      if (!name || !mail || !pass) {
        return res.status(400).json({
          success: false,
          message: "name, mail y pass son requeridos",
        });
      }

      const user = await this.userService.createUser({ name, mail, pass });
      return res.status(201).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserController;