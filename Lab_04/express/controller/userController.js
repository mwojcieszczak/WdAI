import { User } from "../model/User.js";
import { sequelize } from "./db.js";
import { hashSync, compareSync } from "bcrypt"

export const addUser = async (email, password) => {
    const user = await User.create({ email: email, password: hashSync(password, 10) })
    return user.dataValues.id
}

export const compare = async (email, password) => {
    const user = await User.findOne({ where: { email: email } })
    return user != undefined && compareSync(password, user.dataValues.password)
}

export const isEmailTaken = async (email) => {
    const users = await User.findAll({ where: { email: email } })
    return users.length > 0
}