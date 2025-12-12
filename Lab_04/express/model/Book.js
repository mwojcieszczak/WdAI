import { DataTypes } from "sequelize";
import { sequelize } from "../controller/db.js";


export const Book = sequelize.define(
	'Book',
	{
		id:{
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		author:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		year:{
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	}
)