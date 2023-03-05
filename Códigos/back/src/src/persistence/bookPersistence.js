import { db } from "../config/db.js";

async function insert(book) {
  return await db.query(
    `INSERT INTO books (code, name, autor, preco, resumo) VALUES ($1, $2, $3, $4, $5)`,
    [book.code, book.name, book.autor, book.preco, book.resumo]
  );
}

async function getBook(columnName, valor) {
  const { rows } = await db.query(
    `SELECT * FROM books WHERE ${columnName} = $1`,
    [valor]
  );
  return rows;
}

async function updateBook(book, code){
    return await db.query(
        `UPDATE books SET code =$1 ,name=$2,autor=$3, preco=$4, resumo=$5 WHERE code=$6` , [book.code, book.name, book.autor, book.preco, book.resumo,code], 
    );
}

async function deleteBook(code){
    return await db.query(
        `DELETE FROM books WHERE code=$1`,[code]
    )
}

export const bookPersistence = {
  getBook,
  insert,
  updateBook,
  deleteBook
};
