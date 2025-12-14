import { Order } from "../model/Order.js";
import { sequelize } from "./db.js";

export const createOrder = async (userId, bookId, quantity) => {
    const order = await Order.create({ quantity: quantity, userId: userId, bookId: bookId })
    return order.dataValues.id
}

export const getUserOrders = async (userId) => {
    const orders = await Order.findAll({ where: { userId: userId } })
    return orders.map(order => { return { id: order.id, bookId: order.bookId, quantiy: order.quantity } })
}

export const exists = async (orderId) => {
    const order = await Order.findOne({ where: { id: orderId } })
    return order != null
}

export const deleteOrder = async (orderId) => {
    await Order.destroy({ where: { id: orderId } })
}

export const updateOrder = async (orderId, userId, bookId, quantity) => {
    const order = await Order.findOne({ where: { id: orderId } })

    order.set({
        userId: userId,
        bookId, bookId,
        quantity, quantity
    })

    await order.save()
}

