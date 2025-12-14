import jwt from 'jsonwebtoken'

export const authorization = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ error: "No token" })

    const token = authHeader.split(" ")[1]

    jwt.verify(token, "PowinienemDoTegoUżyćENVAleTrudno", (err) => {
        if (err) return res.status(403).json({ error: "Invalid token" })
        next()
    })
}