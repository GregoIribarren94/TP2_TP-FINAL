import { DataTypes, Model } from "sequelize";
import connection from "../db/connection.js";

class User extends Model { }

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        modelName: "User"
    }
);

export default User