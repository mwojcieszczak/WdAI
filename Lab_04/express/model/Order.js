import { DataTypes } from "sequelize";
import { sequelize } from "../controller/db.js";
import { User } from "./User.js";
import { Book } from "./Book.js";


export const Order = sequelize.define(
    'Order',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
)
Order.belongsTo(User, { foreignKey: 'userId' })
Order.belongsTo(Book, { foreignKey: 'bookId' })

Book.hasMany(Order, { foreignKey: 'userId' })
User.hasMany(Order, { foreignKey: 'bookId' })

sequelize.sync()