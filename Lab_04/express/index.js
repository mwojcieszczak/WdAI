import { addBook, deleteBookByID, getAllBooks, getBookByID, testConnection } from "./controller/dbController.js";

testConnection();
addBook();
console.log(await getAllBooks());
console.log(await getBookByID(1));
await deleteBookByID(1);
console.log(await getAllBooks());

