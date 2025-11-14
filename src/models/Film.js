import { DataTypes, Model } from "sequelize";
import connection from "../db/connection.js";

class Film extends Model { }

Film.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        episode_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            },
        },
        opening_crawl: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        producer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        }
    },
    {
        sequelize: connection,
        modelName: "Film"
    }
);

export default Film