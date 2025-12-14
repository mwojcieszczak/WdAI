import Express from "express";
import { addUser, compare, isEmailTaken } from "../controller/userController.js";
import jwt from "jsonwebtoken";

const app = Express()
const port = 3001

app.use(Express.json())

app.post("/api/register", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    if (await isEmailTaken(email)) {
        res.status(409)
        res.json({ error: "Email already taken" })
        return
    }

    const id = await addUser(email, password)

    res.json({ message: "ok", "id": id })
})

app.post("/api/login", async (req, res) => {
    console.log(req.body)
    const email = req.body.email
    const password = req.body.password

    if (!(await compare(email, password))) {
        res.status(401)
        res.json({ error: "Invalid email or password" })
        return
    }

    const token = jwt.sign(
        {
            email: email
        },
        "PowinienemDoTegoUżyćENVAleTrudno",
        {
            expiresIn: "1h"
        }
    )

    res.json({ message: "ok", token: token })
})

app.listen(port, () => {
    console.log(`User service listening on ${port}`);
})