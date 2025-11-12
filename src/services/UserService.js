import User from "../models/User.js";
import bcrypt from "bcrypt";

class UserService {

  // Crear usuario
  createUser = async (data) => {
    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(data.pass, 10);

    const newUser = await User.create({
      ...data,
      pass: hashedPassword
    });

    const { id, name, mail } = newUser;
    return { id, name, mail };
  };

  // Obtener todos los usuarios
  getAllUsers = async () => {
    const users = await User.findAll({
      attributes: ["name", "mail"]
    });

    return users;
  };

  // Login
  login = async (mail, pass) => {
    // Buscar usuario por email
    const user = await User.findOne({ where: { mail } });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(pass, user.pass);

    if (!isPasswordValid) {
      throw new Error("Contraseña incorrecta");
    }

    // Retornar datos del usuario (sin contraseña)
    const { id, name, mail: userMail } = user;

    return { id, name, mail: userMail };
  };
}

export default UserService;
