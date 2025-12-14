import Express from "express";
import { authorization } from "../authorization.js";
import { addBook, deleteBookByID, getAllBooks, getBookByID } from "../controller/bookController.js";
import { createOrder, deleteOrder, exists, getUserOrders, updateOrder } from "../controller/orderController.js";

const app = Express()
const port = 3003

app.use(Express.json())

app.post("/api/orders", [authorization], async (req, res) => {
    const userId = req.body.userId
    const bookId = req.body.bookId
    const quantity = req.body.quantity

    let r
    try {
        r = await fetch(`http://127.0.0.1:3002/api/books/${bookId}`, {
            headers: {
                "Authorization": req.headers.authorization
            }
        })
        //console.log(r);
    } catch {
        res.status(503).json({ error: "Problem with book api" })
        return
    }

    if (r.status == 404) {
        res.status(404).json({ error: "Book not found" })
        return
    } else if (r.status != 200) {
        res.status(503).json({ error: "Problem with book api" })
        return
    }

    const id = await createOrder(userId, bookId, quantity)

    res.json({ message: "ok", id: id })
})

app.get("/api/orders/:userId", [authorization], async (req, res) => {
    const userId = req.params.userId
    const orders = await getUserOrders(userId)

    res.json(orders)
})

app.delete("/api/orders/:orderId", [authorization], async (req, res) => {
    const orderId = req.params.orderId
    if (!(await exists(orderId))) {
        res.status(404).json({ error: "Order not found" })
        return
    }

    await deleteOrder(orderId)

    res.json({ message: "ok" })
})

app.patch("/api/orders/:orderId", [authorization], async (req, res) => {
    const orderId = req.params.orderId
    if (!(await exists(orderId))) {
        res.status(404).json({ error: "Order not found" })
        return
    }

    const userId = req.body.userId
    const bookId = req.body.bookId
    const quantity = req.body.quantity

    let r
    try {
        r = await fetch(`http://127.0.0.1:3002/api/books/${bookId}`, {
            headers: {
                "Authorization": req.headers.authorization
            }
        })
        //console.log(r);
    } catch {
        res.status(503).json({ error: "Problem with book api" })
        return
    }

    if (r.status == 404) {
        res.status(404).json({ error: "Book not found" })
        return
    } else if (r.status != 200) {
        res.status(503).json({ error: "Problem with book api" })
        return
    }

    await updateOrder(orderId, userId, bookId, quantity)

    res.json({ message: "ok" })



})



app.listen(port, () => {
    console.log(`Order service listening on ${port}`);
})