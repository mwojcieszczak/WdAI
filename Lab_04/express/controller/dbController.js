import { Book } from "../model/Book.js";
import { sequelize } from "./db.js";

sequelize.sync()


export const testConnection = async () =>{
	try {
	await sequelize.authenticate();
	console.log('Connection has been established successfully.');
	} catch (error) {
	console.error('Unable to connect to the database:', error);
	}
}

export const addBook = async () =>{
	await Book.create({title: "Title", author:"Author", year:1984})
	console.log("Book added successfully");
}

export const getAllBooks = async () =>{
	const books =  await Book.findAll({
		attributes: ['id', 'title', 'author', 'year']
	})
	return books.map((book)=>book.dataValues)
}

export const getBookByID = async (id) =>{
	const book =  await Book.findOne({
		where: {id: id},
		attributes: ['id', 'title', 'author', 'year']
	})
	return book.dataValues
}

export const deleteBookByID = async(id) =>{
	await Book.destroy({
		where:{id:id}
	})
}