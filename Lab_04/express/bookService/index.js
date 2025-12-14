import Express from "express";
import { authorization } from "../authorization.js";
import { addBook, deleteBookByID, getAllBooks, getBookByID } from "../controller/bookController.js";

const app = Express()
const port = 3002

app.use(Express.json())

app.get("/api/books", [authorization], async (req, res) => {
    res.json(await getAllBooks())
})

app.get("/api/books/:bookId", [authorization], async (req, res) => {
    const bookId = req.params.bookId
    const book = await getBookByID(bookId)
    if (book == null) {
        res.status(404).json({ error: "Book not found" })
        return
    }
    res.json(book)
})

app.post("/api/books", [authorization], async (req, res) => {
    console.log(req.body);
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year

    await addBook(title, author, year)

    res.json({ message: "ok" })
})

app.delete("/api/books/:bookId", [authorization], async (req, res) => {
    const bookId = req.params.bookId
    const book = await getBookByID(bookId)
    if (book == null) {
        res.status(404).json({ error: "Book not found" })
        return
    }
    await deleteBookByID(bookId)
    res.json({ message: "ok" })
})

app.listen(port, () => {
    console.log(`Book service listening on ${port}`);
})