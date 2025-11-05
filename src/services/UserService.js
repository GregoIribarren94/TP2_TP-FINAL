import User from "../models/User.js";

class UserService {
  createUser = async (data) => {
    const newUser = await User.create(data);
    const { id, name, mail } = newUser;
    return { id, name, mail }; 
  };
}

export default UserService;
