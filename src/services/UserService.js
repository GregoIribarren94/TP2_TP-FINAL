import User from "../models/User.js";

class UserService {
  createUser = async (data) => {
    const newUser = await User.create(data);
    const { id, name, mail } = newUser;
    return { id, name, mail }; 
  };

    getAllUsers = async() => {
    const users = await User.findAll({
      attributes:["name", "mail"]
    })

    return users;
  };
}

export default UserService;
